import socketio
import random
#pip install "python-socketio[client]"
sio = socketio.Client()

@sio.on('connect')
def on_connect():
    print('connection established')
    while True:
        fo = open("distancedata.txt", "r")
        data = fo.readline()
        fo.close()
        sio.emit('bbb', data)

@sio.on('bbb')
def on_message(data):
    print('message received with ', data)
    sio.emit('my response', {'response': 'my response'})

@sio.on('disconnect')
def on_disconnect():
    print('disconnected from server')

sio.connect('https://homesecuritybymb.herokuapp.com')
sio.wait()
