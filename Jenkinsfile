pipeline {
    agent {
        docker {
            image 'node:12-alpine'
        }
    }
    environment {
        HOME = '.'
        CHROME_BIN = '/usr/bin/chromium-browser'
    }
    stages {
        stage("Install Chromium Headless") {
            steps{
                echo "====++++executing Install Chromium Headless++++===="
                sh "apk update"
                sh "apk upgrade"
                sh 'echo "http://dl-cdn.alpinelinux.org/alpine/edge/testing" > /etc/apk/repositories '
                sh 'echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories'
                sh 'echo "http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories'
                sh "apk add --no-cache dumb-init curl make gcc g++ python linux-headers binutils-gold gnupg libstdc++ nss chromium" 
                sh "apk del --no-cache make gcc g++ python binutils-gold gnupg libstdc++"
                sh "rm -rf /usr/include"
                sh "rm -rf /var/cache/apk/* /root/.node-gyp /usr/share/man /tmp/*"
            }
            post{
                success{
                    echo "====++++Install Chromium Headless executed succesfully++++===="
                }
                failure{
                    echo "====++++Install Chromium Headless execution failed++++===="
                }
        
            }
        }
        stage("Install Dependencies"){
            steps{
                echo "====++++executing Install Dependencies++++===="
                sh "npm install"
            }
            post{
                success{
                    echo "====++++Install Dependencies executed succesfully++++===="
                }
                failure{
                    echo "====++++Install Dependencies execution failed++++===="
                }
        
            }
        }
        stage("Test"){
            steps{
                sh 'npm run test'
                sh 'npm run test:es'
            }
            post{
                success{
                    echo "====++++Test executed succesfully++++===="
                }
                failure{
                    echo "====++++Test execution failed++++===="
                }
        
            }
        }
        stage("Building Application"){
            steps{
                echo "====++++executing Building Application++++===="
                sh "npm run build"
            }
            post{
                success{
                    echo "====++++Building Application executed succesfully++++===="
                }
                failure{
                    echo "====++++Building Application execution failed++++===="
                }
        
            }
        }
        stage("Publishing to NPM Repository"){
            steps{
                echo "====++++executing Publishing to NPM Repository++++===="
            }
            post{
                success{
                    echo "====++++Publishing to NPM Repository executed succesfully++++===="
                }
                failure{
                    echo "====++++Publishing to NPM Repository execution failed++++===="
                }
        
            }
        }
    }
}
