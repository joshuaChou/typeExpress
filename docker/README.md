建立自有nodejs docker

    docker build -f node/Dockerfile .

建立自有rabbitmq docker

    docker build -hostname my-rabbit --name some-rabbit -f  rabbitmq/Dockerfile .


查詢images
    
    docker images

刪除images

    docker rmi [repository]:[tag]

COPY檔案到docker

    docker cp  [folder] [repository]:[folder]

