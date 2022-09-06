FROM cypress/included:CYPRESS_VERSION

COPY app.yml \
    /root/.cache/Cypress/CYPRESS_VERSION/Cypress/resources/app/packages/server/config/app.yml

RUN useradd -ms /bin/bash jenkins && \
    usermod -aG sudo jenkins

RUN mv /root/.cache /home/jenkins/.cache

RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

RUN chown -R jenkins:jenkins /usr/local/lib/ && \
    chown -R jenkins:jenkins /usr/local/bin && \
    chown -R jenkins:jenkins /home/jenkins/

USER jenkins
ENV CYPRESS_CACHE_FOLDER=/home/jenkins/.cache/Cypress
RUN npm install -g yarn

ENTRYPOINT ["cypress", "run"]
