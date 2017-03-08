import setuptools

setuptools.setup(
    name="jugiter",
    version='0.1.0',
    author="Tomasz Wisniewski",
    description="Jupyter extensions for git",
    packages=setuptools.find_packages(),
    package_data={'jugiter': ['static/*']},
)
