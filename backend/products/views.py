from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.serializers import ModelSerializer
from products.serializer import ProductSerializer
from .models import Product
from cart.models import Cart
from cart.serializer import CartSerializer
from rest_framework.response import Response
from rest_framework import status
from drf_spectacular.utils import extend_schema, OpenApiParameter

name = OpenApiParameter(
    name='name__icontains',
    type=str,
    location=OpenApiParameter.QUERY,
    description="filter by name",
)

category = OpenApiParameter(
    name='category',
    type=int,
    location=OpenApiParameter.QUERY,
    description="filter by category",
)

@extend_schema(
    parameters=[
        OpenApiParameter(name="name", type=str, location=OpenApiParameter.QUERY),
        OpenApiParameter(name="category", type=str, location=OpenApiParameter.QUERY),
    ]
)
@api_view(['GET'])
@permission_classes([AllowAny])
def products(request):
    data = dict()
    if request.query_params:
        for k, v in request.query_params.items():
            data[k] = v
    products = Product.objects.filter(**data)
    serialized = ProductSerializer(products, many=True, context={ 'request': request })
    return Response(status=status.HTTP_200_OK, data = serialized.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def product_detail(request, id):
    product = Product.objects.get(id=id)
    serialized = ProductSerializer(product, context={ 'request': request })
    return Response(status=status.HTTP_200_OK, data = serialized.data)



class AddToCartSerializer(ModelSerializer):
    class Meta:
        model = Cart
        fields = ('product', 'quantity')

@extend_schema(
    request=AddToCartSerializer,
    responses={200: CartSerializer},
)
@api_view(['POST'])
def add_to_cart(request):
    user = request.user
    product = Product.objects.get(id=request.data['product'])
    cart = Cart.objects.create(user=user, product=product, quantity=request.data['quantity'])
    serialized = CartSerializer(cart, context={ 'request': request })
    return Response(status=status.HTTP_200_OK, data = serialized.data)
    # if serialized.is_valid():
    #     return Response(status=status.HTTP_200_OK, data = serialized.data)
    # else: return Response(status=status.HTTP_400_BAD_REQUEST, data=serialized.errors)
        
