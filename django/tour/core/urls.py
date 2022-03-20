from django.urls import path
from core import views
from django.conf.urls import url 
#from .utils.helpers import MACAddressConverter

#register_converter(MACAddressConverter, "macaddr")

urlpatterns = [
    #GET FUNCTIONS
    path('tour',views.TourInformation.as_view()),
    

]