#
# run with;
#    python dev_server2.py
#
#

from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl

server = 'local-fusion.nmcaydence.com'
port = 4444

httpd = HTTPServer((server, port), SimpleHTTPRequestHandler)

sslctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)

sslctx.check_hostname = False  # If set to True, only the hostname that matches the certificate will be accepted

sslctx.load_cert_chain(certfile='cert.pem', keyfile='key.pem')

httpd.socket = sslctx.wrap_socket(httpd.socket, server_side=True)

print("Starting " + server + " on port " + str(port) + ", run forever...")
httpd.serve_forever()

