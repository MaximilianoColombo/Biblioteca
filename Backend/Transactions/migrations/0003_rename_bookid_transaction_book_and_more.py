# Generated by Django 5.0.6 on 2024-06-19 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Transactions', '0002_alter_transaction_loanstatus_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='transaction',
            old_name='bookID',
            new_name='book',
        ),
        migrations.RenameField(
            model_name='transaction',
            old_name='memberID',
            new_name='member',
        ),
        migrations.AlterField(
            model_name='transaction',
            name='loanStatus',
            field=models.CharField(choices=[('inCourse', 'En curso'), ('returned', 'Devuelto')], default='inCourse', max_length=20),
        ),
    ]
