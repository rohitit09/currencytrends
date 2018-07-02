import pandas as pd
import datetime
import matplotlib.pyplot as plt
df =pd.read_csv('names.csv')


X=[]
Y=[]

def filtercurrency(msg):
    msg=msg.split("=")
    dollor=msg[0]
    dollor=float(dollor.replace("USD","").strip())
    rupee=msg[1]
    rupee=float(rupee.replace("EUR","").strip())
    X.append(dollor)
    Y.append(rupee)
    return (dollor,rupee)



def filtertime(msg):
    tim=datetime.datetime.strptime(msg,"%Y-%m-%d %H:%M")
    # print(tim.strftime("%d:%m:%Y"))
    # X.append(tim.strftime("%H:%M"))


df["timeinfo"]=df["timeinfo"].apply(filtertime)
df['currencyinfo']=df['currencyinfo'].apply(filtercurrency)

# print(df['currencyinfo'][0][1])
print(X,Y)
fig = plt.figure()
ax = fig.add_subplot(111)
ax.grid()


# fig.autofmt_xdate()
# fig.autofmt_ytime()
plt.plot(X,Y)
plt.xlabel('dollor')
plt.ylabel("EUR")
plt.title('currency')
plt.show()

# x = [DT.datetime.strptime(key,"%m-%d-%y") for (key, value) in data ]
# y = [DT.datetime.strptime(key,"%h:%m") for (key, value) in data]