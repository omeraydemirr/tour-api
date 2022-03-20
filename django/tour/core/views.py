from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from core.models import Tour, TourSerializer
# Create your views here.

class TourInformation(GenericAPIView):
    #Get tour informations
    def get(self,request):
        response = Tour.objects.all()
        my_response = TourSerializer(response,many=True).data
        return Response(my_response,status=200)
    

    #save a new tour
    def post(self,request):
        company = request.data['company']
        title = request.data['title']
        description = request.data['description']
        start_date_time = request.data['start_date_time']
        end_date_time = request.data['end_date_time']
        price = request.data['price']
        
        try:
            json_body = Tour(company=company,title=title,description=description,start_date_time=start_date_time,end_date_time=end_date_time,price=price)
            json_body.save()
        except Exception as e:
            print(e)
            return Response("ERROR!",status=400)
        else:
            return Response({"Saved Successfully!"},status=200)
    
    def delete(self,request):
        Tour.objects.all().delete()
        return Response("DELETED",status=200)