from flask_sqlalchemy import SQLAlchemy
import enum

db = SQLAlchemy()

class Rol(enum.Enum):
    postulante = "postulante"
    asesor = "asesor"

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rol = db.Column(db.Enum(Rol), unique=False, nullable=False)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    correo = db.Column(db.String(120), unique=True, nullable=False)
    contrasena = db.Column(db.String(80), unique=False, nullable=False)
    telefono = db.Column(db.Integer, unique=False, nullable=True)
    descripcion = db.Column(db.String(1000), unique=False, nullable=True)
    foto = db.Column(db.String(80), unique=False, nullable=True)
    cv = db.Column(db.String(80), unique=False, nullable=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "correo": self.correo,
            "telefono": self.telefono,
            "descripcion": self.descripcion,
            "foto": self.foto,
            "cv": self.cv,
            # do not serialize the password, its a security breach
        }

class Tip(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), unique=False, nullable=False)
    titulo = db.Column(db.String(120), unique=False, nullable=False)
    fecha = db.Column(db.String(80), unique=False, nullable=False)
    foto = db.Column(db.String(80), unique=False, nullable=False)
    descripcion = db.Column(db.String(1000), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "titulo": self.titulo,
            "fecha": self.fecha,
            "foto": self.foto,
            "descripcion": self.descripcion,
            # do not serialize the password, its a security breach
        }