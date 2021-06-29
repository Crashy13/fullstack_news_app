from django.urls import include, path
from .views import ProfileDetailAPIView, ProfileListAPIView

urlpatterns = [
    path('<int:pk>/', ProfileDetailAPIView.as_view()),
    path('', ProfileListAPIView.as_view()),
]
