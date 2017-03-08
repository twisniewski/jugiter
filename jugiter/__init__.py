from jugiter.handlers import setup_handlers

def _jupyter_server_extension_paths():
    return [{
        'module': 'jugiter',
    }]

def _jupyter_nbextension_paths():
    return [{
        "section": "tree",
        "dest": "jugiter",
        "src": "static",
        "require": "jugiter/tree"
    }]

def load_jupyter_server_extension(nbapp):
    setup_handlers(nbapp.web_app)
