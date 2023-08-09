"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Tip
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

@api.route('/login', methods=['POST'])
def crear_token():
    correo = request.json.get("correo", None)
    contrasena = request.json.get("contrasena", None)
    
    if correo is None:
        return jsonify({"msg": "No has ingresado correo"}), 400
    if contrasena is None:
        return jsonify({"msg": "no has ingresado contrasena"}), 400

    postulante = User.query.filter_by(correo=correo, contrasena=contrasena).first()
    if postulante is None:
        # the postulante was not found on the database
        return jsonify({"msg": "Invalid postulantename or contrasena"}), 401
    else:
        print(postulante)
        # create a new token with the postulante id inside
        access_token = create_access_token(identity=postulante.id)
        return jsonify({ "token": access_token, "postulante_id": postulante.id }), 200

@api.route('/postulante', methods=['GET'])
@jwt_required()
def buscar_postulante():
    postulante = User.query.get(get_jwt_identity())
    return jsonify(postulante.serialize())

@api.route('/postulante', methods=['POST'])
def crear_postulante():
    print(request.json)
    nombre = request.json.get("nombre", None)
    correo = request.json.get("correo", None)
    contrasena = request.json.get("contrasena", None)

    if nombre is None or correo is None or contrasena is None: 
        return jsonify({"msg": "No enough data"}), 400

    else:
        try: 
            postulante=User(rol="postulante", nombre=nombre, correo=correo, contrasena=contrasena)
            db.session.add(postulante)
            db.session.commit()
            return jsonify({"msg": "Postulante creado"}), 200
            
        except Exception as error:
            return jsonify({"msg": f"{error.args[0]}"}), 400
        
@api.route('/postulante', methods=['PUT'])
@jwt_required()
def editar_postulante():
    postulante = User.query.get(get_jwt_identity())
    postulante.foto = request.json.get("foto", postulante.foto)
    postulante.telefono = request.json.get("telefono", postulante.telefono)
    postulante.descripcion = request.json.get("descripcion", postulante.descripcion)

    if postulante.foto is None and postulante.telefono is None and postulante.descripcion is None:
        return jsonify({"msg": "No enough data"}), 400
    else:
        try:
            db.session.commit()
            return jsonify({"msg": "Postulante editado"}), 200

        except Exception as error:
            return jsonify({"msg": f"{error.args[0]}"}), 400
        
@api.route('/cv', methods=['PUT'])
@jwt_required()
def subir_cv():
    postulante = User.query.get(get_jwt_identity())
    postulante.cv = request.json.get("cv", postulante.cv)

    if postulante.cv is None:
        return jsonify({"msg": "No enough data"}), 400
    else:
        try:
            db.session.commit()
            return jsonify({"msg": "CV del Postulado subido"}), 200

        except Exception as error:
            return jsonify({"msg": f"{error.args[0]}"}), 400
        
@api.route('/asesor', methods=['GET'])
@jwt_required()
def buscar_asesor():
    asesor = User.query.get(get_jwt_identity())
    return jsonify(asesor.serialize())

@api.route('/asesor', methods=['POST'])
def crear_asesor():
    print(request.json)
    nombre = request.json.get("nombre", None)
    correo = request.json.get("correo", None)
    contrasena = request.json.get("contrasena", None)

    if nombre is None or correo is None or contrasena is None: 
        return jsonify({"msg": "No enough data"}), 400

    else:
        try: 
            asesor=User(rol="asesor", nombre=nombre, correo=correo, contrasena=contrasena)
            db.session.add(asesor)
            db.session.commit()
            return jsonify({"msg": "Asesor creado"}), 200
            
        except Exception as error:
            return jsonify({"msg": f"{error.args[0]}"}), 400

@api.route('/blog', methods=['GET'])
@jwt_required()
def buscar_tip():
    tip = Tip.query.get(get_jwt_identity())
    return jsonify(tip.serialize())

@api.route('/blog', methods=['POST'])
@jwt_required()
def crear_tip():
    print(request.json)
    foto = request.json.get("foto", None)
    titulo = request.json.get("titulo", None)
    descripcion = request.json.get("descripcion", None)

    if foto is None or titulo is None or descripcion is None: 
        return jsonify({"msg": "No enough data"}), 400

    else:
        try: 
            tip=Tip(foto=foto, titulo=titulo, descripcion=descripcion)
            db.session.add(tip)
            db.session.commit()
            return jsonify({"msg": "Tip creado"}), 200
            
        except Exception as error:
            return jsonify({"msg": f"{error.args[0]}"}), 400
        
@api.route('/blog', methods=['PUT'])
@jwt_required()
def editar_tip():
    tip = Tip.query.get(get_jwt_identity())
    tip.foto = request.json.get("foto", tip.foto)
    tip.titulo = request.json.get("titulo", tip.titulo)
    tip.descripcion = request.json.get("descripcion", tip.descripcion)

    if tip.foto is None and tip.titulo is None and tip.descripcion is None:
        return jsonify({"msg": "No enough data"}), 400
    else:
        try:
            db.session.commit()
            return jsonify({"msg": "Tip editado"}), 200

        except Exception as error:
            return jsonify({"msg": f"{error.args[0]}"}), 400
        