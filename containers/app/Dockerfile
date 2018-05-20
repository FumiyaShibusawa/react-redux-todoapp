FROM ruby:latest

ENV DEBIAN_FRONTEND noninteractive
ENV LANG C.UTF-8
ENV APP_ROOT ./react-redux-todoapp

WORKDIR $APP_ROOT

# 基本的なパッケージのインストール
RUN apt-get update \
    && apt-get install -y build-essential \
       curl \
       git \
       vim \
       less \
       gcc \
       g++ \
       apt-transport-https \
       wget \
    && apt-get autoclean && \
       apt-get clean && \
       rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*


# yarnパッケージ管理ツールインストール
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

# Node.jsをインストール
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash - && \
    apt-get install nodejs

COPY . .

EXPOSE 5056
