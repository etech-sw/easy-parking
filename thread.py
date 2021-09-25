from threading import Thread

class Periodic (Thread):

    def __init__(self, callbak):
        Thread.__init__(self)
        self.callbak = callbak

    def run(self):
        self.callbak()