{
    'name': 'Mi Componente OWL',
    'version': '17.0.1.0.0',
    'category': 'Tools',
    'summary': 'Laboratorio de aprendizaje OWL',
    'depends': ['web'],
    'data': [
        'views/todo_action.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'mi_componente_owl/static/src/js/**/*',
            'mi_componente_owl/static/src/xml/**/*',
            'mi_componente_owl/static/src/scss/**/*',
        ],
    },
    'installable': True,
    'application': False,
}