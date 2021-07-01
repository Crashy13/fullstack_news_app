from django.urls import path
from .views import ArticleListAPIView, ArticleDetailAPIView, CategoryListAPIView

app_name = 'articles'

urlpatterns = [
    path('<int:pk>', ArticleDetailAPIView.as_view(), name="article_detail"),
    path('category/', CategoryListAPIView.as_view()),
    path('', ArticleListAPIView.as_view(), name="article_list"),

]
