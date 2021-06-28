from django.urls import include, path
from .views import ProfileDetailAPIView
from .views import ProfileListAPIView

urlpatterns = [
    path('<int:pk>/', ProfileDetailAPIView.as_view()),
    path('profiles/', ProfileListAPIView.as_view()),
]
