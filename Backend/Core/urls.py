from django.urls import path, include
from Backend.Core.views import ModelFields

urlpatterns = [
    path('core/models', ModelFields.as_view())
]