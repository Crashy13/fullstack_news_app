from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    is_owner = serializers.SerializerMethodField('get_owner_status')
    owner = serializers.ReadOnlyField(source='author.author')
    author = serializers.SerializerMethodField('get_author')

    def get_owner_status(self, obj):
        return obj.author == self.context['request'].user

    def get_author(self, obj):
        return obj.author.author

    class Meta:
        model = Article
        fields = '__all__'
