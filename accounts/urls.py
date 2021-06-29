from django.urls import include, path
from .views import ProfileDetailAPIView, ProfileListAPIView

urlpatterns = [
    path('profiles/', ProfileDetailAPIView.as_view()),
    path('profiles/', ProfileListAPIView.as_view()),
]
