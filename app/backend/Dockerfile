FROM alpine:latest

ARG PB_VERSION=0.8.0

RUN apk add --no-cache \
    unzip \
    ca-certificates

# download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_armv7.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# start PocketBase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8443"]