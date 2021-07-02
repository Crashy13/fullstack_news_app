from rest_framework import generics


from .models import Article
from .serializers import ArticleSerializer
from .permissions import IsAuthOrReadOnly

class ArticleListAPIView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class ArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_class = (IsAuthOrReadOnly,)

class CategoryListAPIView(generics.ListCreateAPIView):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        selection = self.request.query_params['category']
        return Article.objects.filter(category=selection)

class AdminListAPIView(generics.ListAPIView):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        selection = self.request.user
        return Article.objects.filter(is_published=False)

class UserArticleListAPIView(generics.ListAPIView):
    serializer_class = ArticleSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_queryset(self):
        user = self.request.user
        return Article.objects.filter(author=user)
