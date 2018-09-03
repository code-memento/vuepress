---
title: Tomcat tricks
---
# Tomcat tricks

## Create a Windows service

To create a Tomcat service :

1. Launch the command line console,
2. Go to `/bin` directory within your Tomcat folder,
3. Run `service install "Service Name"`.

## Access the server's configuration

To access the server's configuration :

1. Launch the command line console,
2. Go to `/bin` directory within your Tomcat folder,
3. Run `tomcat7w.exe //MS/ServiceName`

> If you don't remember your service name, go to Services and open the service properties :
>
> * Right-click > Properties > Service name

## Remote debugging

Add this to your JVM Options :

```
-Xdebug
-Xrunjdwp:transport=dt_socket,address=9015,server=y,suspend=n
```

If it's a Windows Service, you can modify the Java Options in the service configuration (*previous section*).