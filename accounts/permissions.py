from rest_framework import permissions


class IsAuthOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
        # safe-methods includes
            return True
        # everyone can read
        if request.method == 'DELETE':
        # if method is 'DELETE'
            return obj.username == request.user or request.user.is_staff
        # if the user that requested the method equals the username of the object(message) or if the user is staff, they can delete
        if request.method == 'PUT':
        # if method is 'PUT'
            return obj.username == request.user
        # if the user that requested the method equals the username of the object(message), they can edit
