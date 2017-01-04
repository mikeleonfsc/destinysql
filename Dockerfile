
FROM microsoft/mssql-server-windows-express
RUN Net user administrator P@ssword 
COPY Fsc-destiny c:\\Fsc-destiny
WORKDIR c:/Fsc-destiny/Fsc/bin
RUN config.bat
RUN dbcreate P@ssword c: c: 1
RUN dbinit
WORKDIR c:/Fsc-destiny/jboss/bin
RUN destiny register
RUN destiny start
WORKDIR c:/
