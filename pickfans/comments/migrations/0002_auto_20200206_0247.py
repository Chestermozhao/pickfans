# Generated by Django 3.0.2 on 2020-02-06 02:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("account", "0002_auto_20200122_0847"),
        ("comments", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="comments",
            name="user",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="account.Account"
            ),
        ),
    ]
