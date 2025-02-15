# Generated by Django 3.0.2 on 2020-01-22 07:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("channels", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Videos",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("title", models.CharField(blank=True, default="", max_length=100)),
                ("route", models.CharField(max_length=100)),
                ("description", models.CharField(blank=True, max_length=50)),
                ("youtuber", models.CharField(blank=True, max_length=30)),
                ("viewsCount", models.IntegerField()),
                ("uploadDate", models.CharField(max_length=10)),
                (
                    "channel",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="channels.Channels",
                    ),
                ),
            ],
            options={"ordering": ["created"],},
        ),
    ]
