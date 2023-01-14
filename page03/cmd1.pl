#!/usr/bin/perl -w

use strict;

my $tgtd = "../../";
my $of = "./tmpo.txt";

# ->
my @tgtfs = ();
foreach my $tmpv (glob("$tgtd/*")){
    my $name = &basename($tmpv);
    ($name eq "assets") && next;
    ($name eq "bg") && next;
    ($name eq "data") && next;

    # =>
    &rtnfile($tmpv,\@tgtfs);
}

my @tgtfs2 = sort(@tgtfs);

# ->
if(open OF,">$of"){
    foreach my $f (@tgtfs2){
        print "$f\n";
        ($f =~ /PVPI_export\/outdir/) && next;
        ($f =~ /wkdirServer\/tmp/) && next;
        ($f =~ /wkdirServer\/test_readExcel/) && next;
        if(open IF,"<$f"){
            my $head = $f;
            $head =~ s/$tgtd/.\//;
            print OF "\nFILE:: $head\n";
            while(<IF>){
                chomp;
                print OF $_ . "\n";
            }
            close(IF);
        }else{}
    }
    close(OF);
}else{}

system("dos2unix $of");
exit;


#
sub basename(){
    my @tmpa = split("/",$_[0]);
    return pop @tmpa;
}

#
sub rtnfile(){
    my $d = shift;
    my $ra = shift;
    if(-d $d){
        foreach my $tmpv( glob "$d/*"){
            &rtnfile($tmpv,$ra);
        }
    }else{
        push @$ra, $d;
    }
}
