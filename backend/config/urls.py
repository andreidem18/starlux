"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions
from rest_framework.routers import DefaultRouter
from cart.views import buy_cart, empty_cart, get_cart, change_quantity, remove_item
from categories.views import get_categories
from orders.views import get_orders
from products.views import add_to_cart, product_detail, products
from users.views import UserViewSet
from django.conf import settings
from django.conf.urls.static import static
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView


router = DefaultRouter()
router.register("users", UserViewSet)


urlpatterns = [
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/docs/", SpectacularSwaggerView.as_view(url_name="schema")),
    path("categories/", get_categories),
    path("login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("orders/", get_orders),
    path("cart/empty_cart/", empty_cart),
    path("cart/<id>/remove_item/", remove_item),
    path("cart/<item_id>/change_quantity/", change_quantity),
    path("cart/buy/", buy_cart),
    path("cart/", get_cart),
    path("products/add_to_cart/", add_to_cart),
    path("products/<id>/", product_detail),
    path("products/", products),
    path("admin/", admin.site.urls),
] + router.urls + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
