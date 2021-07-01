from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    is_owner = serializers.SerializerMethodField('get_owner_status')
    is_published = serializers.SerializerMethodField('get_published_status')

    def get_owner_status(self, obj):
        return obj.author == self.context['request'].user

    def get_published_status(self, obj):
        pass

    class Meta:
        model = Article
        fields = '__all__'
