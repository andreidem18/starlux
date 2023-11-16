from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from categories.serializer import CategorySerializer
from .models import Product
from images.models import Image

class ImagesSerializer(ModelSerializer):

    url = serializers.SerializerMethodField('get_photo_url')

    class Meta:
        model = Image
        fields = ('id', 'url')

    def get_photo_url(self, instance):
        request = self.context["request"]
        return request.build_absolute_uri(instance.url.url)

class ProductSerializer(ModelSerializer):
    images = ImagesSerializer(read_only=True, many=True)
    category = CategorySerializer(read_only=True)
    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'price', 'category', 'images')
