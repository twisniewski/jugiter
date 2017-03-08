from notebook.utils import url_path_join as ujoin
from notebook.base.handlers import IPythonHandler
import logging
import os


logger = logging.getLogger('jugiter')

class HelloWorldHandler(IPythonHandler):
    def post(self):
        add_dir = self.get_argument('add_dir', '')
        gitrepo = self.get_argument('gitrepo', '')
        root_dir = self.contents_manager.root_dir
        logger.error(self.settings)
        logger.error("add"+add_dir.replace(self.default_url,''))
        logger.error("gitrepo"+gitrepo)
        logger.error("roor"+root_dir)
        dest="{}{}".format(root_dir, add_dir.replace(self.default_url,''))
        logger.error("cd {} && git clone {}".format(dest, gitrepo))
        os.system("cd {} && git clone {}".format(dest, gitrepo))
        self.finish('Hello, world!')

def setup_handlers(webapp):
    host_pattern = '.*$'
    route_pattern = ujoin(webapp.settings['base_url'], '/hello')
    webapp.add_handlers(host_pattern, [
        (route_pattern, HelloWorldHandler)
    ])
    logger.error('Added handler for route %s', route_pattern)
