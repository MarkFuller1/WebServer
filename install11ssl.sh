tar xzvf openssl-1.1.0f.tar.gz
cd openssl-1.1.0f
./config -Wl,--enable-new-dtags,-rpath,'$(LIBRPATH)'
make
sudo make install
