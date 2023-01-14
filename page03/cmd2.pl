#!/usr/bin/perl -w

use strict;

my $if = "./tmpo.txt";
my $od = "./testd";

if(open IF,"<$if"){
    my $curf = "";
    my $fh = undef;
    while(<IF>){
        if(/^FILE::\s*(\S+)/){
            $curf = $1;
            (defined($fh)) && (close $fh);
            &my_mkdir($od . "/" . &dirname($curf));
            open $fh,">$od/$curf";
            next;
        }else{}
        (!defined $fh) && next;
        print $fh $_;
    }
    close $fh;
    close(IF);
}else{}

#
sub my_mkdir(){
    my @a = split '/', $_[0];
    for(my $i=0;$i<=$#a;$i++){
        my $tgtd = join("/",@a[0..$i]);
        if(! -d $tgtd){
            mkdir $tgtd;
        }else{}
    }
}

#
sub dirname(){
    my @tmpa = split("/",$_[0]);
    pop @tmpa;
    return join("/", @tmpa);
}
