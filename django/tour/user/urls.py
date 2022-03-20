
from django.urls import path
from .views import current_user, SignUp

urlpatterns = [
    path('activeuser/', current_user),
    path('signup/', SignUp.as_view())
]