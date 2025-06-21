from rest_framework.response import Response
from rest_framework.views import APIView
from Backend.Books.models import Book
from Backend.Members.models import Member
from Backend.Transactions.models import Transaction

# Create your views here.
class ModelFields(APIView):
    def get(self, request):
        book_fields = [field.name for field in Book._meta.get_fields()]
        member_fields = [field.name for field in Member._meta.get_fields()]
        transaction_fields = [field.name for field in Transaction._meta.get_fields()]

        
        return Response({
            'books': book_fields,
            'members': member_fields,
            'transactions': transaction_fields
        })