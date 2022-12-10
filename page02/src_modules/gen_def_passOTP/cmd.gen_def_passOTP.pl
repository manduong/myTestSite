#!/usr/bin/perl -w

use strict;
use lib "/shsv/BackendIO/99_Physical/4_Users/manduong/PROGRAMS/CPAN";

use String::Random;

($#ARGV < 1) && &myQuit(1);
(!-f $ARGV[0]) && &myQuit(2);
(! $ARGV[1]) && &myQuit(3);

my $inf = $ARGV[0];
my $outf = $ARGV[1];

# -> preserve the outfile content before generation
my %hoO = ();
if(-f $outf && open(OUTF,"<$outf")){
    while(<OUTF>){
        (/^\s*#/) && next;# ignore the commented-out
        chomp;
        my @tmpa = split(',');
        $hoO{$tmpa[0]} = $tmpa[1];
    }
    close OUTF;
}else{}

# -> do the job for each account registered
if(-f $inf && open(INF,"<$inf")){
    my $pass = String::Random->new;
    while(<INF>){
        (/^\s*#/) && next;
        chomp;
        (exists $hoO{$_}) && next;
        $hoO{$_} = $pass->randpattern("CCcncnss");
        print "Newly generated for $_ !\n";
    }
    close INF;
}else{}

# -> output
if(scalar keys %hoO && open(OUTF,">$outf")){
    print OUTF "#account,defOTP\n";#header
    foreach my $tmpv (sort keys %hoO){
        print OUTF "$tmpv,$hoO{$tmpv}" . "\n";
    }
    close OUTF;
}else{}


sub myQuit(){
    my $code = 0;
    my $addInf = "";
    (@_) && ($code = shift);
    (@_) && ($addInf = shift);
    print "\n";
    if($code == 1){ print "[E" .sprint("%03d",$code)."] Please input.\n";
    }elsif($code == 2){ print "[E" .sprint("%03d",$code)."] Please input a file.\n";
    }elsif($code == 3){ print "[E" .sprint("%03d",$code)."] Please input an out file path/name.\n";
    }else{ print "Exit by default.\n"; }
    ($addInf) && print $addInf . "\n";
    exit;
}
