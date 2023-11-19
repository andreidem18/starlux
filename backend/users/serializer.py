from rest_framework.serializers import ModelSerializer
from cart.serializer import CartSerializer
from orders.serializer import OrderSerializer
from .models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name')
        
class CreateUserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name', 'password')
