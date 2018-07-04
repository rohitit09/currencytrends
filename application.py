# -*- coding: utf-8 -*-
# Librarys
from flask import Flask, jsonify,request
import pandas as pd
import datetime
import csv
import os
# from flask_sqlalchemy import SQLAlchemy

# Variables
app = Flask(__name__)


# Settings
app.config['DEBUG'] = False
app.config['SECRET_KEY'] = 'xesrapsecret#1234'


# Views
@app.route('/getdata', methods=['POST'])
def updatecsv():
    # import ipdb; ipdb.set_t race()
    data=request.json
    print(data)
    data['insertime']=datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    bool=False
    if os.path.exists(os.getcwd()+"/currencydata.csv"):
        bool=True
    with open('currencydata.csv', 'a', newline='') as csvfile:
        fieldnames = ['currencyinfo', 'timeinfo',"insertime"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if not bool:
            writer.writeheader()
        writer.writerow(data)
    return jsonify({"msg":"csv upadted"})


# Run
if __name__ == '__main__':
    app.run()
