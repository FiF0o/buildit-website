# Fix error: Invalid US-ASCII character "\xE2"
# or add @charset "UTF-8" at the beginning of every file which is included and the main file resolved
Encoding.default_external = "utf-8"

require 'semantic-ui-sass'
# compass install semantic-ui


# require 'semantic-ui-sass'
 require 'compass/import-once/activate'
# Require any additional compass plugins here.

# configuration: http://compass-style.org/help/documentation/configuration-reference/
# Set this to the root of your project when deployed:

# was not included
# project_path = :stand_alone
# images_dir =
# images_path
# http_images_path =

 http_path = "/dist"
 css_dir = "/dist"
 sass_dir = "assets/styles"
 images_dir = "dist/images"
 generated_images_dir = "dist/images"
 images_path = "dist/images"
 javascripts_dir = "assets/scripts"

 # running with gem compass-sourcemaps
 sass_options = {:sourcemap => true}

# The directory where the font files are kept. Standalone projects will default to <css_dir>/fonts. Rails projects will default to "public/fonts".
 fonts_path = "assets/fonts"

# The full http path to font files on the web server.
# http_fonts_path = ""

# The relative http path to font files on the web server.
# http_fonts_dir = ""

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
 preferred_syntax = :sass

# and then run:
# sass-convert -R --from scss --to sass assets/styles && rm assets/styles/styles.scss

# sass-convert -R --from scss --to sass assets/styles/testscss assets/styles/testsass && rm -rf assets/styles/testscss && mv assets/styles/testsass assets/styles/testscss
# 1. To compile on demand:
#     compass compile [path/to/project]
# 2. To monitor your project for changes and automatically recompile:
#     compass watch [path/to/project]