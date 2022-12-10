#!/bin/csh -f

set tmpf = "./tmpf.txt";
set outf = "../../data_manual/list_user_w_def_OTP.txt";

## -> list of registered accounts
cat <<ENDOFFILE >! $tmpf
man.duong.ym@renesas.com
hac.nguyen.xf@renesas.com
thien.nguyen.te@renesas.com
ENDOFFILE

## -> do the job
./cmd.gen_def_passOTP.pl \
    $tmpf \
    $outf \
;

## -> test
cat $outf


## -> clean temp files
rm -f $tmpf
