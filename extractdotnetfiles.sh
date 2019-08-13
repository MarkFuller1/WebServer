mkdir -p $HOME/dotnet && tar zxf dotnet-sdk-2.2.102-linux-arm.tar.gz -C $HOME/dotnet
export DOTNET_ROOT=$HOME/dotnet 
export PATH=$PATH:$HOME/dotnet
