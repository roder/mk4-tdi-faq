#!/bin/sh

wget                \
    -r              \
    --timestamping  \
    --no-if-modified-since  \
    --no-parent     \
    -nH             \
    --cut-dirs=1    \
    -X /d2/1000q/a3b4,/d2/1000q/b5,/d2/1000q/a5,/d2/1000q/a6,/d2/1000q/b7,/d2/1000q/8p,/d2/1000q/a3,/d2/1000q/a7/,/d2/1000q/a8-tdi/,/d2/1000q/Audia48k,/d2/1000q/cayenne,/d2/1000q/q7,/d2/1000q/treg/,/d2/images/a3b4,/d2/images/b5/,/d2/images/a5,/d2/images/a6/,/d2/images/b7/,/d2/images/8p,/d2/images/a3/,/d2/images/a7/,/d2/images/a8-tdi/,/d2/images/q7,/d2/images/cayenne,/d2/images/treg,/d2/images/Audia48k    \
    https://www.myturbodiesel.com/d2/1000q.htm \
