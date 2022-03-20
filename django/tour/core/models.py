from django.db import models
from django.db.models.fields import DateField

from .definitions.DateTimeWithoutTZ import DateTimeWithoutTZField as DateTimeField
import uuid
from rest_framework import serializers


# Create your models here.
class Tour(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    company = models.CharField(max_length=24)
    title = models.CharField(max_length=24)
    description = models.TextField()
    start_date_time = DateField(null=True)
    end_date_time = DateField(null=True)
    price = models.DecimalField(max_digits=6,decimal_places=2,null=True)

    class Meta:
        db_table = 'tour'


class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = ['company','title','description','start_date_time','end_date_time','price']