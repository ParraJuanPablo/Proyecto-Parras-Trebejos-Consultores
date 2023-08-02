from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Postulante(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    correo = db.Column(db.String(120), unique=True, nullable=False)
    contraseña = db.Column(db.String(80), unique=False, nullable=False)
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
    
class Asesor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    correo = db.Column(db.String(120), unique=True, nullable=False)
    contraseña = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "correo": self.correo,
            # do not serialize the password, its a security breach
        }

class Tip(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    asesor_id = db.Column(db.Integer, db.ForeignKey(Asesor.id), unique=False, nullable=False)
    titulo = db.Column(db.String(120), unique=False, nullable=False)
    fecha = db.Column(db.String(80), unique=False, nullable=False)
    foto = db.Column(db.String(80), unique=False, nullable=False)
    descripcion = db.Column(db.String(1000), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "asesor_id": self.asesor_id,
            "titulo": self.titulo,
            "fecha": self.fecha,
            "foto": self.foto,
            "descripcion": self.descripcion,
            # do not serialize the password, its a security breach
        }