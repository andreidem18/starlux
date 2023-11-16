from django.db import models
from products.models import Product

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Image(models.Model):
    url = models.ImageField(upload_to=upload_to, blank=True, null=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, related_name='images')
    
    def __str__(self):
        return self.url.url
