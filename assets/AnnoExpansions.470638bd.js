import{_ as s,g as l,C as n,h as p,W as c,M as Z,j as Cs,a8 as L,S as J,f as v,Q as u,z as T,l as Q,x as a,ab as o,k as $,Z as y,B as M,P as i,T as r,e as t,q as g,K as d,aa as K,s as j,a3 as h,i as S,n as f,u as q,R as G,O as X,a0 as U,a1 as ws,ad as Y,ac as ss,a6 as as,y as x,a9 as zs,a5 as $s,o as F,J as ns,N as cs,Y as is,$ as W,p as ys,r as os,G as Ss,E as qs,A as es,X as E,H as ls,m as ps,c as rs,L as bs,D as ts,V as _s,U as Bs,a7 as fs,a2 as ks,a4 as ms,v as Ds,w as Ls,I as b,t as vs,a as Ts,ae as Ms,af as Ps,ag as Rs,am as Gs,an as Fs,aj as Ws,ak as us,al as Es}from"./info-card.61bd2ca5.js";import{C as Vs,r as Is,D as C,E as V,F as P,M as w,G as I,Q as A,W as As,X as Ns,N,O as gs,R as ds,I as Hs}from"./index.a54d42aa.js";import"./use-router-link.c58e2b9b.js";import"./QItem.e002f3b4.js";var Os="/assets/Age_of_Exploration.2843623e.webp",Zs="/assets/Aluminium_Profiles.1969c4e9.webp",Js="/assets/Archdukes_Schnitzel.091f0880.webp",Qs="/assets/Atole.18ce21da.webp",Ks="/assets/Banana_Surprise.97d897b3.webp",js="/assets/Bankers_Lamps.e963dcaf.webp",Xs="/assets/Bauxite.4519fc18.webp",Us="/assets/Billiard_Tables.43e9758e.webp",Ys="/assets/Biscuits.47fbf94f.webp",sa="/assets/Black_Muscovy.cdd2c4a4.webp",aa="/assets/Bombs.9be0f84a.webp",na="/assets/Briefcases.2d9c6db4.webp",ca="/assets/Brioche_Royale.c1f641a6.webp",H="/assets/Camphor_Wax.8abfffa0.webp",ia="/assets/Care_Packages.da2d53eb.webp",_="/assets/Celluloid.a4feb9f3.webp",B="/assets/Cherry_Wood.aa3106e0.webp",oa="/assets/Chewing_Gum.0bd7b12e.webp",k="/assets/Cinnamon.705d2772.webp",e="/assets/Citrus.e01dc0d9.webp",O="/assets/Coconut_Oil.b313cecb.webp",ea="/assets/Cognac.0216a44f.webp",la="/assets/Crockery.4d945b91.webp",pa="/assets/Daiquiri_Tropic.4e68d89b.webp",ra="/assets/Detergent.9a27a308.webp",ta="/assets/Donut_Fourre.a5c20f76.webp",fa="/assets/Dung.b659fd98.webp",ma="/assets/Eclair.e4f370c8.webp",ua="/assets/Elevators.f7a3ba7b.webp",ga="/assets/Airship.373a0f6b.webp",da="/assets/Enbesa_Sunrise.3790859f.webp",R="/assets/Ethanol.ac053069.webp",ha="/assets/Face_Cream.d49e9e48.webp",xa="/assets/Fertiliser.55607e6c.webp",Ca="/assets/Fish_and_Frites.0c002abf.webp",wa="/assets/Fish.44d3a669.webp",za="/assets/Four-Poster_Beds.6b2f41ea.webp",$a="/assets/Glogg.d125f142.webp",ya="/assets/Icon_goat_milk_0.54987305.webp",Sa="/assets/Helium.3032f959.webp",qa="/assets/Homard_Lit_de_Terroir.72c05f18.webp",ba="/assets/Hot_Sauce.61c10026.webp",_a="/assets/Industrial_Lubricant.b7aa8828.webp",hs="/assets/Jam.f8de67d6.webp",m="/assets/Lacquer.cbe23cf7.webp",Ba="/assets/Lady_Marmelade.4e93df4e.webp",ka="/assets/Lemonade.85002697.webp",Da="/assets/Lipstick.e11e3816.webp",La="/assets/Lobster_Cheminee.04ac9cd2.webp",va="/assets/Lounge_Seating.9b0943c6.webp",Ta="/assets/Montmartre_75.ca44fc00.webp",Ma="/assets/Palmier_Biscuit.b92246ac.webp",Pa="/assets/Pamphlets.2bac1e46.webp",Ra="/assets/Pomade.b7a6a1a2.webp",Ga="/assets/Refrigerators.79d0d22a.webp",Fa="/assets/Resin.c83b0558.webp",Wa="/assets/Sea_Mines.54ad78e1.webp",Ea="/assets/Shampoo.7a01e562.webp",Va="/assets/Souvenirs.fb438009.webp",Ia="/assets/Stroggof_Goulash.6336b895.webp",Aa="/assets/Toasters.87ca282a.webp",Na="/assets/Toothpaste.90487f95.webp",Ha="/assets/Toys.6a3445c1.webp",Oa="/assets/Trifle_Tower.d9d4c9e3.webp",Za="/assets/Typewriters.5dab1bcf.webp",Ja="/assets/Vacuum_Cleaners.77ddb696.webp",Qa="/assets/Vanity_Screens.b0661e53.webp",Ka="/assets/Venison_en_Croute.bf2b18f4.webp",ja="/assets/Venison_Tartare.91834744.webp",Xa="/assets/Violins.458c4fa2.webp",Ua="/assets/Icon_wansa_wood_0.5f5a8941.webp",Ya="/assets/Writing_Desks.446d77b9.webp";const sn=[{colBreak:!1,tierName:"Building Materials",productionChains:[{productionChain:"elevators",mermaidDefinition:s`
      flowchart LR
      Iron(<img src='${l}' class='icon-size' /><span class='ratio-count'>1</span>)
      Coal(<img src='${n}' class='icon-size' /><span class='ratio-count'>1</span>)
      Steel(<img src='${p}' class='icon-size' /><span class='ratio-count'>2</span>)
      Wood(<img src='${c}' class='icon-size' /><span class='ratio-count'>1</span>)
      Marquetry(<img src='${Z}' class='icon-size' /><span class='ratio-count'>4</span>)
      SteamMotor(<img src='${Cs}' class='icon-size' /><span class='ratio-count'>3</span>)
      Elevator(<img src='${ua}' class='icon-size' /><span class='ratio-count'>1</span>)
      style SteamMotor stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
      style Elevator stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
      Iron & Coal --> Steel --> Elevator
      Wood --> Marquetry --> Elevator
      SteamMotor --> Elevator
      `}]},{colBreak:!1,tierName:"Silo",productionChains:[{productionChain:"siloAlpaca",mermaidDefinition:s`
        flowchart LR
        SiloPig(<span class='icon-flex-row'><img src='${L}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${J}' class='electricity-icon' /></span><span class='ratio-count'>1</span></span></span>)
        Pig(<img src='${L}' class='icon-size' /><span class='ratio-count'>2.66</span>)
        SiloPig --> Pig
        `},{productionChain:"silos",mermaidDefinition:s`
        flowchart LR
        Dung(<img src='${fa}' class='icon-size' /><span class='ratio-count'>1</span>)
        Fertiliser(<img src='${xa}' class='icon-size' /><span class='ratio-count'>1</span>)
        Silo(<img src='${J}' class='icon-size' /><span class='ratio-count'>5</span>)
        Dung --> Fertiliser --> Silo
        `}]},{colBreak:!1,tierName:"Chemical Plant",productionChains:[{productionChain:"ethanol",chainMultiplier:"2",mermaidDefinition:s`
        flowchart TB
        Wood(<span class='icon-flex-row'><img src='${c}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Corn(<img src='${v}' class='icon-size' /><span class='ratio-count'>2</span>)
        Ethanol(<img src='${R}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wood & Corn --> Ethanol
        `},{productionChain:"lacquer",chainMultiplier:"2",mermaidDefinition:s`
        flowchart TB
        Ethanol(<img src='${R}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sand(<img src='${u}' class='icon-size' /><span class='ratio-count'>1</span>)
        Resin(<img src='${Fa}' class='icon-size' /><span class='ratio-count'>1</span>)
        Lacquer(<img src='${m}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sand & Resin & Ethanol --> Lacquer
        `},{productionChain:"celluloid",chainMultiplier:"2",mermaidDefinition:s`
        flowchart TB
        Cotton(<img src='${T}' class='icon-size' /><span class='ratio-count'>2</span>)
        CamphorWax(<img src='${H}' class='icon-size' /><span class='ratio-count'>1</span>)
        Ethanol(<img src='${R}' class='icon-size' /><span class='ratio-count'>1</span>)
        Celluloid(<img src='${_}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cotton & CamphorWax & Ethanol --> Celluloid
        `}]},{colBreak:!1,tierName:"Skyscrapers",productionChains:[{productionChain:"chewingGum",mermaidDefinition:s`
        flowchart LR
        Caoutchouc(<img src='${Q}' class='icon-size' /><span class='ratio-count'>2</span>)
        SugarCane(<img src='${a}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sugar(<img src='${o}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cinnamon(<img src='${k}' class='icon-size' /><span class='ratio-count'>1</span>)
        ChewingGum(<img src='${oa}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane --> Sugar
        Caoutchouc & Sugar & Cinnamon --> ChewingGum
        `},{productionChain:"typewriters",mermaidDefinition:s`
        flowchart LR
        Iron(<img src='${l}' class='icon-size' /><span class='ratio-count'>1</span>)
        Coal(<img src='${n}' class='icon-size' /><span class='ratio-count'>1</span>)
        Steel(<img src='${p}' class='icon-size' /><span class='ratio-count'>2</span>)
        Copper(<img src='${$}' class='icon-size' /><span class='ratio-count'>2</span>)
        Zinc(<img src='${y}' class='icon-size' /><span class='ratio-count'>2</span>)
        Brass(<img src='${M}' class='icon-size' /><span class='ratio-count'>4</span>)
        Lacquer(<img src='${m}' class='icon-size' /><span class='ratio-count'>2</span>)
        Typewriters(<img src='${Za}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Typewriters stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Iron & Coal --> Steel --> Typewriters
        Copper & Zinc --> Brass --> Typewriters
        Lacquer --> Typewriters
        `},{productionChain:"violins",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        Iron(<span class='icon-flex-row'><img src='${l}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${n}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${p}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        CherryWood(<span class='icon-flex-row'><img src='${B}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Lacquer(<span class='icon-flex-row'><img src='${m}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Violins(<img src='${Xa}' class='icon-size' /><span class='ratio-count'>1</span>)
        Iron & Coal --> Steel --> Violins
        CherryWood --> Violins
        Lacquer --> Violins
        `},{productionChain:"biscuits",mermaidDefinition:s`
        flowchart LR
        Pigs(<img src='${i}' class='icon-size' /><span class='ratio-count'>4</span>)
        Tallow(<img src='${r}' class='icon-size' /><span class='ratio-count'>4</span>)
        Grain(<img src='${t}' class='icon-size' /><span class='ratio-count'>4</span>)
        Flour(<img src='${g}' class='icon-size' /><span class='ratio-count'>2</span>)
        Citrus(<img src='${e}' class='icon-size' /><span class='ratio-count'>2</span>)
        Biscuits(<img src='${Ys}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Biscuits stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Pigs --> Tallow --> Biscuits
        Grain --> Flour --> Biscuits
        Citrus --> Biscuits
        `},{productionChain:"cognac",mermaidDefinition:s`
        flowchart LR
        Vineyard(<img src='${d}' class='icon-size' /><span class='ratio-count'>2</span>)
        CherryWood(<span class='icon-flex-row'><img src='${B}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        SugarCane(<span class='icon-flex-row'><img src='${a}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sugar(<span class='icon-flex-row'><img src='${o}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Cognac(<img src='${ea}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane --> Sugar
        Vineyard & CherryWood & Sugar --> Cognac
        `},{productionChain:"billiardsTable",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        Alpaca(<span class='icon-flex-row'><img src='${L}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Felt(<span class='icon-flex-row'><img src='${K}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        CherryWood(<span class='icon-flex-row'><img src='${B}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Celluloid(<span class='icon-flex-row'><img src='${_}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Billiards(<img src='${Us}' class='icon-size' /><span class='ratio-count'>1</span>)
        CherryWood --> Billiards
        Alpaca --> Felt --> Billiards
        Celluloid --> Billiards
        `},{productionChain:"toys",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        Alpaca(<span class='icon-flex-row'><img src='${L}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Felt(<span class='icon-flex-row'><img src='${K}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Celluloid(<span class='icon-flex-row'><img src='${_}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Lacquer(<span class='icon-flex-row'><img src='${m}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Toys(<img src='${Ha}' class='icon-size' /><span class='ratio-count'>1</span>)
        Alpaca --> Felt --> Toys
        Celluloid & Lacquer --> Toys
        `}]},{colBreak:!1,tierName:"Tourists",productionChains:[{productionChain:"shampoo",mermaidDefinition:s`
        flowchart LR
        CoconutOil(<img src='${O}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cinnamon(<img src='${k}' class='icon-size' /><span class='ratio-count'>1</span>)
        Shampoo(<img src='${Ea}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pigs(<img src='${i}' class='icon-size' /><span class='ratio-count'>2</span>)
        Tallow(<img src='${r}' class='icon-size' /><span class='ratio-count'>2</span>)
        Soap(<img src='${j}' class='icon-size' /><span class='ratio-count'>1</span>)
        CoconutOil & Cinnamon --> Shampoo
        Pigs --> Tallow --> Soap --> Shampoo
        `},{productionChain:"lemonade",mermaidDefinition:s`
        flowchart LR
        SugarCane(<img src='${a}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sugar(<img src='${o}' class='icon-size' /><span class='ratio-count'>1</span>)
        Lemonade(<img src='${ka}' class='icon-size' /><span class='ratio-count'>1</span>)
        Citrus(<img src='${e}' class='icon-size' /><span class='ratio-count'>1</span>)
        Saltpeter(<img src='${h}' class='icon-size' /><span class='ratio-count'>4</span>)
        SugarCane --> Sugar --> Lemonade
        Citrus --> Lemonade
        Saltpeter --> Lemonade
        `},{productionChain:"souvenirs",mermaidDefinition:s`
        flowchart LR
        CamphorWax(<img src='${H}' class='icon-size' /><span class='ratio-count'>1</span>)
        Souvenirs(<img src='${Va}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sand(<img src='${u}' class='icon-size' /><span class='ratio-count'>1</span>)
        Glass(<img src='${S}' class='icon-size' /><span class='ratio-count'>1</span>)
        Souvenirs
        Cotton(<img src='${T}' class='icon-size' /><span class='ratio-count'>2</span>)
        CamphorWax --> Souvenirs
        Sand --> Glass --> Souvenirs
        Cotton --> Souvenirs
        `}]},{colBreak:!1,tierName:"Restaurants",productionChains:[{productionChain:"archdukeSchnitzel",chainMultiplier:"2",mermaidDefinition:s`
        flowchart LR
        Pigs0(<img src='${i}' class='icon-size' /><span class='ratio-count'>1</span>)
        Schnitzel(<img src='${Js}' class='icon-size' /><span class='ratio-count'>1</span>)
        Potato(<span class='icon-flex-row'><img src='${f}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Schnitzel
        Pigs1(<img src='${i}' class='icon-size' /><span class='ratio-count'>1</span>)
        Tallow(<img src='${r}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pigs0 --> Schnitzel
        Potato --> Schnitzel
        Pigs1 --> Tallow --> Schnitzel
        `},{productionChain:"stroggofGoulash",mermaidDefinition:s`
        flowchart TB
        Beef(<img src='${q}' class='icon-size' /><span class='ratio-count'>2</span>)
        RedPeppers(<img src='${G}' class='icon-size' /><span class='ratio-count'>2</span>)
        Corn(<img src='${v}' class='icon-size' /><span class='ratio-count'>1</span>)
        StroggofGoulash(<img src='${Ia}' class='icon-size' /><span class='ratio-count'>1</span>)
        Beef & RedPeppers & Corn --> StroggofGoulash
        `},{productionChain:"fishFrites",chainMultiplier:"2",mermaidDefinition:s`
        flowchart TB
        Fish(<span class='icon-flex-row'><img src='${wa}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Potato(<span class='icon-flex-row'><img src='${f}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Citrus(<span class='icon-flex-row'><img src='${e}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        FishFrites(<img src='${Ca}' class='icon-size' /><span class='ratio-count'>1</span>)
        Fish & Potato & Citrus --> FishFrites
        `},{productionChain:"venisonEnCroute",chainMultiplier:"2",mermaidDefinition:s`
        flowchart LR
        Grain(<img src='${t}' class='icon-size' /><span class='ratio-count'>1</span>)
        Flour(<span class='icon-flex-row'><img src='${g}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        VenisonEnCroute(<img src='${Ka}' class='icon-size' /><span class='ratio-count'>1</span>)
        Potato(<span class='icon-flex-row'><img src='${f}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Caribou(<img src='${X}' class='icon-size' /><span class='ratio-count'>1</span>)
        Grain --> Flour --> VenisonEnCroute
        Potato --> VenisonEnCroute
        Caribou --> VenisonEnCroute
        `},{productionChain:"lobsterCheminee",chainMultiplier:"2",mermaidDefinition:s`
        flowchart TB
        Lobster(<img src='${U}' class='icon-size' /><span class='ratio-count'>1</span>)
        Citrus(<span class='icon-flex-row'><img src='${e}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Tobacco(<img src='${ws}' class='icon-size' /><span class='ratio-count'>2</span>)
        LobsterCheminee(<img src='${La}' class='icon-size' /><span class='ratio-count'>1</span>)
        Lobster & Citrus & Tobacco --> LobsterCheminee
        `}]},{colBreak:!1,tierName:"Caf\xE9",productionChains:[{productionChain:"donut",chainMultiplier:"2",mermaidDefinition:s`
        flowchart LR
        Grain(<img src='${t}' class='icon-size' /><span class='ratio-count'>1</span>)
        Flour(<span class='icon-flex-row'><img src='${g}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Donut(<img src='${ta}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pig(<img src='${i}' class='icon-size' /><span class='ratio-count'>1</span>)
        Tallow(<img src='${r}' class='icon-size' /><span class='ratio-count'>1</span>)
        Jam(<span class='icon-flex-row'><img src='${hs}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Grain --> Flour --> Donut
        Pig --> Tallow --> Donut
        Jam --> Donut
        `},{productionChain:"eclair",chainMultiplier:"2",mermaidDefinition:s`
        flowchart LR
        Grain(<img src='${t}' class='icon-size' /><span class='ratio-count'>1</span>)
        Flour(<span class='icon-flex-row'><img src='${g}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Eclair(<img src='${ma}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane0(<span class='icon-flex-row'><img src='${a}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sugar0(<span class='icon-flex-row'><img src='${o}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        SugarCane1(<span class='icon-flex-row'><img src='${a}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sugar1(<span class='icon-flex-row'><img src='${o}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Cocoa(<img src='${Y}' class='icon-size' /><span class='ratio-count'>1</span>)
        Chocolate(<span class='icon-flex-row'><img src='${ss}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Grain --> Flour --> Eclair
        SugarCane0 --> Sugar0 --> Eclair
        SugarCane1 --> Sugar1 --> Chocolate
        Cocoa --> Chocolate
        Chocolate --> Eclair
        `},{productionChain:"palmierBiscuit",chainMultiplier:"2",mermaidDefinition:s`
        flowchart LR
        Grain(<img src='${t}' class='icon-size' /><span class='ratio-count'>1</span>)
        Flour(<span class='icon-flex-row'><img src='${g}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        PalmierBiscuit(<img src='${Ma}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pig(<img src='${i}' class='icon-size' /><span class='ratio-count'>1</span>)
        Tallow(<img src='${r}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cinnamon(<span class='icon-flex-row'><img src='${k}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Grain --> Flour --> PalmierBiscuit
        Pig --> Tallow --> PalmierBiscuit
        Cinnamon --> PalmierBiscuit
        `},{productionChain:"venisonTartare",chainMultiplier:"2",mermaidDefinition:s`
        flowchart TB
        Grapes(<img src='${d}' class='icon-size' /><span class='ratio-count'>2</span>)
        VenisonTartare(<img src='${ja}' class='icon-size' /><span class='ratio-count'>1</span>)
        Caribou(<img src='${X}' class='icon-size' /><span class='ratio-count'>1</span>)
        Citrus(<span class='icon-flex-row'><img src='${e}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Grapes & Caribou & Citrus --> VenisonTartare
        `},{productionChain:"bananaSurprise",chainMultiplier:"2",mermaidDefinition:s`
        flowchart TB
        Goat(<img src='${ya}' class='icon-size' /><span class='ratio-count'>1</span>)
        Plantains(<span class='icon-flex-row'><img src='${as}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Cinnamon(<span class='icon-flex-row'><img src='${k}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        BananaSurprise(<img src='${Ks}' class='icon-size' /><span class='ratio-count'>1</span>)
        Goat & Plantains & Cinnamon --> BananaSurprise
        `}]},{colBreak:!1,tierName:"Bar",productionChains:[{productionChain:"daiquiriTropic",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        SugarCane0(<span class='icon-flex-row'><img src='${a}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        SugarCane1(<span class='icon-flex-row'><img src='${a}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Wood(<span class='icon-flex-row'><img src='${c}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Rum(<span class='icon-flex-row'><img src='${x}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Plantain(<span class='icon-flex-row'><img src='${as}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        DaiquiriTropic(<img src='${pa}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane0 --> DaiquiriTropic
        SugarCane1 & Wood --> Rum --> DaiquiriTropic
        Plantain --> DaiquiriTropic
        `},{productionChain:"blackMuscovy",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        CoffeeBeans(<img src='${zs}' class='icon-size' /><span class='ratio-count'>1</span>)
        Coffee(<span class='icon-flex-row'><img src='${$s}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        BlackMuscovy(<img src='${sa}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane(<span class='icon-flex-row'><img src='${a}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Wood(<span class='icon-flex-row'><img src='${c}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Rum(<span class='icon-flex-row'><img src='${x}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Potato(<span class='icon-flex-row'><img src='${f}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Schnapps(<span class='icon-flex-row'><img src='${F}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        CoffeeBeans --> Coffee --> BlackMuscovy
        SugarCane & Wood --> Rum --> BlackMuscovy
        Potato --> Schnapps --> BlackMuscovy
        `},{productionChain:"montmatre",chainMultiplier:"2",mermaidDefinition:s`
        flowchart LR
        SugarCane(<span class='icon-flex-row'><img src='${a}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sugar(<span class='icon-flex-row'><img src='${o}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sand(<span class='icon-flex-row'><img src='${u}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Glass(<span class='icon-flex-row'><img src='${S}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Vineyard(<img src='${d}' class='icon-size' /><span class='ratio-count'>2</span>)
        Champagne(<span class='icon-flex-row'><img src='${ns}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Citrus(<span class='icon-flex-row'><img src='${e}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Montmatre(<img src='${Ta}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane --> Sugar --> Montmatre
        Sand --> Glass --> Champagne --> Montmatre
        Vineyard --> Champagne
        Citrus --> Montmatre
        `},{productionChain:"glegg",chainMultiplier:"2",mermaidDefinition:s`
        flowchart TB
        Whales(<img src='${cs}' class='icon-size' /><span class='ratio-count'>1</span>)
        Vineyard(<img src='${d}' class='icon-size' /><span class='ratio-count'>2</span>)
        Cinnamon(<span class='icon-flex-row'><img src='${k}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Glogg(<img src='${$a}' class='icon-size' /><span class='ratio-count'>1</span>)
        Whales & Vineyard & Cinnamon --> Glogg
        `},{productionChain:"enbesaSunrise",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        Hibiscus(<img src='${is}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane(<span class='icon-flex-row'><img src='${a}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Wood(<span class='icon-flex-row'><img src='${c}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Rum(<span class='icon-flex-row'><img src='${x}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Spices(<img src='${W}' class='icon-size' /><span class='ratio-count'>1</span>)
        EnbesaSunrise(<img src='${da}' class='icon-size' /><span class='ratio-count'>1</span>)
        Hibiscus --> EnbesaSunrise
        SugarCane & Wood --> Rum --> EnbesaSunrise
        Spices --> EnbesaSunrise
        `}]},{colBreak:!0,tierName:"skip"},{colBreak:!1,tierName:"Iron Tower",productionChains:[{productionChain:"briocheRoyale",mermaidDefinition:s`
        flowchart LR
        Pig(<img src='${i}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sausages(<img src='${ys}' class='icon-size' /><span class='ratio-count'>1</span>)
        Grain(<img src='${t}' class='icon-size' /><span class='ratio-count'>1</span>)
        Flour(<span class='icon-flex-row'><img src='${g}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Bakery(<img src='${os}' class='icon-size' /><span class='ratio-count'>1</span>)
        Beef(<img src='${q}' class='icon-size' /><span class='ratio-count'>2</span>)
        GoldOre(<span class='icon-flex-row'><img src='${Ss}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>83%</span><span class='ratio-count'>3</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${n}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Gold(<img src='${qs}' class='icon-size' /><span class='ratio-count'>1</span>)
        BriocheRoyale(<img src='${ca}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pig --> Sausages --> BriocheRoyale
        Grain --> Flour --> Bakery --> BriocheRoyale
        Beef --> BriocheRoyale
        GoldOre & Coal --> Gold --> BriocheRoyale
        `},{productionChain:"trifleTower",mermaidDefinition:s`
        flowchart LR
        SugarCane(<span class='icon-flex-row'><img src='${a}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Wood(<span class='icon-flex-row'><img src='${c}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Rum(<span class='icon-flex-row'><img src='${x}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Grain(<img src='${t}' class='icon-size' /><span class='ratio-count'>1</span>)
        Flour(<span class='icon-flex-row'><img src='${g}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Bread(<img src='${os}' class='icon-size' /><span class='ratio-count'>1</span>)
        Vineyard(<img src='${d}' class='icon-size' /><span class='ratio-count'>2</span>)
        SugarCane1(<span class='icon-flex-row'><img src='${a}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sugar(<span class='icon-flex-row'><img src='${o}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Trifle(<img src='${Oa}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane & Wood --> Rum --> Trifle
        Grain --> Flour --> Bread --> Trifle
        Vineyard --> Trifle
        SugarCane1 --> Sugar --> Trifle
        `},{productionChain:"ladyMarmelade",mermaidDefinition:s`
        flowchart LR
        SugarCane(<span class='icon-flex-row'><img src='${a}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Wood(<span class='icon-flex-row'><img src='${c}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Rum(<span class='icon-flex-row'><img src='${x}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sand(<span class='icon-flex-row'><img src='${u}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Glass(<span class='icon-flex-row'><img src='${S}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Vineyard(<img src='${d}' class='icon-size' /><span class='ratio-count'>2</span>)
        Champagne(<span class='icon-flex-row'><img src='${ns}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Citrus(<span class='icon-flex-row'><img src='${e}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Jam(<span class='icon-flex-row'><img src='${hs}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        LadyMarmelade(<img src='${Ba}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane & Wood --> Rum --> LadyMarmelade
        Sand --> Glass --> Champagne --> LadyMarmelade
        Vineyard --> Champagne
        Citrus & Jam --> LadyMarmelade
        `},{productionChain:"ageOfExploration",mermaidDefinition:s`
        flowchart TB
        Gas(<span class='icon-flex-row'><img src='${es}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>450%</span><span class='ratio-count'>1</span></span></span>)
        Potato(<span class='icon-flex-row'><img src='${f}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        RedPepper(<img src='${G}' class='icon-size' /><span class='ratio-count'>2</span>)
        Beef(<img src='${q}' class='icon-size' /><span class='ratio-count'>2</span>)
        AgeOfExploration(<img src='${Os}' class='icon-size' /><span class='ratio-count'>1</span>)
        Gas & Potato & RedPepper & Beef --> AgeOfExploration
        `},{productionChain:"homardLitTerroir",mermaidDefinition:s`
        flowchart TB
        Lobster(<img src='${U}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sanga(<img src='${E}' class='icon-size' /><span class='ratio-count'>1</span>)
        Potato(<span class='icon-flex-row'><img src='${f}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Spices(<img src='${W}' class='icon-size' /><span class='ratio-count'>1</span>)
        HomardLitTerroir(<img src='${qa}' class='icon-size' /><span class='ratio-count'>1</span>)
        Lobster & Sanga & Potato & Spices --> HomardLitTerroir
        `}]},{colBreak:!1,tierName:"Department Store",productionChains:[{productionChain:"toasters",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        Iron(<span class='icon-flex-row'><img src='${l}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${n}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${p}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Zinc(<span class='icon-flex-row'><img src='${y}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Coal0(<span class='icon-flex-row'><img src='${n}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Filament(<img src='${ls}' class='icon-size' /><span class='ratio-count'>1</span>)
        Toasters(<img src='${Aa}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Toasters stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Iron & Coal --> Steel --> Toasters
        Zinc --> Toasters
        Coal0 --> Filament --> Toasters
        `},{productionChain:"vaccumCleaners",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        Sheep(<span class='icon-flex-row'><img src='${ps}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Celluloid(<span class='icon-flex-row'><img src='${_}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Iron(<span class='icon-flex-row'><img src='${l}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${n}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${p}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        VaccumCleaners(<img src='${Ja}' class='icon-size' /><span class='ratio-count'>1</span>)
        style VaccumCleaners stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Celluloid --> VaccumCleaners
        Iron & Coal --> Steel --> VaccumCleaners
        Sheep --> VaccumCleaners
        `},{productionChain:"crockery",chainMultiplier:"4",mermaidDefinition:s`
        flowchart TB
        Clay(<span class='icon-flex-row'><img src='${rs}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sand0(<span class='icon-flex-row'><img src='${u}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Lacquer(<span class='icon-flex-row'><img src='${m}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Crockery(<img src='${la}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Crockery stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Clay --> Crockery
        Lacquer --> Crockery
        Sand0 --> Crockery
        `},{productionChain:"refrigerators",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        Iron(<span class='icon-flex-row'><img src='${l}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${n}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${p}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Caoutchouc(<img src='${Q}' class='icon-size' /><span class='ratio-count'>1</span>)
        Gas(<span class='icon-flex-row'><img src='${es}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>450%</span><span class='ratio-count'>1</span></span></span>)
        Refrigerators(<img src='${Ga}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Refrigerators stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Iron & Coal --> Steel --> Refrigerators
        Gas & Caoutchouc --> Refrigerators
        `},{productionChain:"briefcases",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        Copper(<span class='icon-flex-row'><img src='${$}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Zinc(<span class='icon-flex-row'><img src='${y}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Brass(<img src='${M}' class='icon-size' /><span class='ratio-count'>1</span>)
        Briefcases(<img src='${na}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sanga(<img src='${E}' class='icon-size' /><span class='ratio-count'>1</span>)
        Celluloid(<span class='icon-flex-row'><img src='${_}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        style Briefcases stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Copper & Zinc --> Brass --> Briefcases
        Celluloid --> Briefcases
        Sanga --> Briefcases
        `}]},{colBreak:!1,tierName:"Furniture Store",productionChains:[{productionChain:"bankersLamps",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        Copper(<span class='icon-flex-row'><img src='${$}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Zinc(<span class='icon-flex-row'><img src='${y}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Brass(<img src='${M}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sand(<span class='icon-flex-row'><img src='${u}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Glass(<span class='icon-flex-row'><img src='${S}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${n}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Filament(<img src='${ls}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sand0(<span class='icon-flex-row'><img src='${u}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Glass0(<span class='icon-flex-row'><img src='${S}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        LightBulb(<img src='${bs}' class='icon-size' /><span class='ratio-count'>1</span>)
        BankerLamp(<img src='${js}' class='icon-size' /><span class='ratio-count'>1</span>)
        style BankerLamp stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Copper & Zinc --> Brass --> BankerLamp
        Sand --> Glass --> BankerLamp
        Coal --> Filament --> LightBulb
        Sand0 --> Glass0 --> LightBulb
        LightBulb --> BankerLamp
      `},{productionChain:"vanityScreens",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        Cotton(<img src='${T}' class='icon-size' /><span class='ratio-count'>1</span>)
        CottonMill(<span class='icon-flex-row'><img src='${ts}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        CherryWood(<span class='icon-flex-row'><img src='${B}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Lacquer(<span class='icon-flex-row'><img src='${m}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        CottonMill(<span class='icon-flex-row'><img src='${ts}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        VanityScreens(<img src='${Qa}' class='icon-size' /><span class='ratio-count'>1</span>)
        style VanityScreens stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Cotton --> CottonMill
        CottonMill & CherryWood & Lacquer --> VanityScreens
      `},{productionChain:"writingDesks",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        Copper(<span class='icon-flex-row'><img src='${$}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Zinc(<span class='icon-flex-row'><img src='${y}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Brass(<img src='${M}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wood(<span class='icon-flex-row'><img src='${c}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Marquetry(<img src='${Z}' class='icon-size' /><span class='ratio-count'>1</span>)
        Lacquer(<span class='icon-flex-row'><img src='${m}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        WritingDesks(<img src='${Ya}' class='icon-size' /><span class='ratio-count'>1</span>)
        style WritingDesks stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Copper & Zinc --> Brass
        Wood --> Marquetry
        Brass & Marquetry & Lacquer --> WritingDesks
      `},{productionChain:"fourPosterBeds",chainMultiplier:"4",mermaidDefinition:s`
        flowchart TB
        BearHunting(<span class='icon-flex-row'><img src='${_s}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>75%</span><span class='ratio-count'>2</span></span></span>)
        Goose(<img src='${Bs}' class='icon-size' /><span class='ratio-count'>2</span>)
        CherryWood(<span class='icon-flex-row'><img src='${B}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        FourPosterBeds(<img src='${za}' class='icon-size' /><span class='ratio-count'>1</span>)
        style FourPosterBeds stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        BearHunting & Goose & CherryWood --> FourPosterBeds
        `},{productionChain:"loungeSeating",chainMultiplier:"4",mermaidDefinition:s`
        flowchart TB
        Sheep(<span class='icon-flex-row'><img src='${ps}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sanga(<img src='${E}' class='icon-size' /><span class='ratio-count'>1</span>)
        WansaWood(<span class='icon-flex-row'><img src='${Ua}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        LoungeSeating(<img src='${va}' class='icon-size' /><span class='ratio-count'>1</span>)
        style LoungeSeating stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Sheep & Sanga & WansaWood --> LoungeSeating
        `}]},{colBreak:!1,tierName:"Drug Store",productionChains:[{productionChain:"toothpaste",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        SugarCane(<span class='icon-flex-row'><img src='${a}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sugar(<span class='icon-flex-row'><img src='${o}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${n}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Pig(<img src='${i}' class='icon-size' /><span class='ratio-count'>1</span>)
        Tallow(<img src='${r}' class='icon-size' /><span class='ratio-count'>1</span>)
        Soap(<span class='icon-flex-row'><img src='${j}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Toothpaste(<img src='${Na}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Toothpaste stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        SugarCane --> Sugar --> Toothpaste
        Coal --> Toothpaste
        Pig --> Tallow --> Soap --> Toothpaste
        `},{productionChain:"detergent",chainMultiplier:"4",mermaidDefinition:s`
        flowchart TB
        Ethanol(<span class='icon-flex-row'><img src='${R}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Citrus(<span class='icon-flex-row'><img src='${e}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Saltpeter(<img src='${h}' class='icon-size' /><span class='ratio-count'>2</span>)
        Detergent(<img src='${ra}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Detergent stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Ethanol & Citrus & Saltpeter --> Detergent
        `},{productionChain:"lipstick",chainMultiplier:"4",mermaidDefinition:s`
        flowchart TB
        FishOil(<span class='icon-flex-row'><img src='${fs}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        CoconutOil(<span class='icon-flex-row'><img src='${O}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Lacquer(<span class='icon-flex-row'><img src='${m}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Lipstick(<img src='${Da}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Lipstick stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        FishOil & CoconutOil & Lacquer --> Lipstick
        `},{productionChain:"faceCream",chainMultiplier:"2",mermaidDefinition:s`
        flowchart TB
        CoconutOil(<span class='icon-flex-row'><img src='${O}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Citrus(<span class='icon-flex-row'><img src='${e}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Whaling(<img src='${cs}' class='icon-size' /><span class='ratio-count'>1</span>)
        FaceCream(<img src='${ha}' class='icon-size' /><span class='ratio-count'>1</span>)
        style FaceCream stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        CoconutOil & Citrus & Whaling --> FaceCream
        `},{productionChain:"pomade",chainMultiplier:"2",mermaidDefinition:s`
        flowchart TB
        CamphorWax(<span class='icon-flex-row'><img src='${H}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Apiary(<span class='icon-flex-row'><img src='${ks}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Hibiscus(<img src='${is}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pomade(<img src='${Ra}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Pomade stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        CamphorWax & Apiary & Hibiscus --> Pomade
        `}]},{colBreak:!1,tierName:"Supply Factories | Airships",productionChains:[{productionChain:"bombs",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        Saltpeter(<img src='${h}' class='icon-size' /><span class='ratio-count'>2</span>)
        Pig(<img src='${i}' class='icon-size' /><span class='ratio-count'>1</span>)
        Saltpeter0(<img src='${h}' class='icon-size' /><span class='ratio-count'>2</span>)
        Dynamite(<img src='${ms}' class='icon-size' /><span class='ratio-count'>1</span>)
        Tallow(<img src='${r}' class='icon-size' /><span class='ratio-count'>1</span>)
        Iron(<span class='icon-flex-row'><img src='${l}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${n}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${p}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Bomb(<img src='${aa}' class='icon-size' /><span class='ratio-count'>1</span>)
        Saltpeter --> Bomb
        Pig --> Tallow --> Dynamite --> Bomb
        Saltpeter0 --> Dynamite
        Iron & Coal --> Steel --> Bomb
        `},{productionChain:"seaMines",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        Copper(<span class='icon-flex-row'><img src='${$}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Pig(<img src='${i}' class='icon-size' /><span class='ratio-count'>1</span>)
        Tallow(<img src='${r}' class='icon-size' /><span class='ratio-count'>1</span>)
        Saltpeter(<img src='${h}' class='icon-size' /><span class='ratio-count'>2</span>)
        Dynamite(<img src='${ms}' class='icon-size' /><span class='ratio-count'>1</span>)
        SeaMine(<img src='${Wa}' class='icon-size' /><span class='ratio-count'>1</span>)
        Iron(<span class='icon-flex-row'><img src='${l}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${n}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${p}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Copper --> SeaMine
        Pig --> Tallow --> Dynamite --> SeaMine
        Saltpeter --> Dynamite
        Iron & Coal --> Steel --> SeaMine
        `},{productionChain:"pamphlets",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        Wood(<span class='icon-flex-row'><img src='${c}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Cotton(<img src='${T}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pamphlets(<img src='${Pa}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wood & Cotton --> Pamphlets
        `},{productionChain:"carePackage",chainMultiplier:"4",mermaidDefinition:s`
        flowchart LR
        Cattle(<img src='${q}' class='icon-size' /><span class='ratio-count'>2</span>)
        RedPeppers(<img src='${G}' class='icon-size' /><span class='ratio-count'>2</span>)
        ArtisnalKitchen(<img src='${Ds}' class='icon-size' /><span class='ratio-count'>2</span>)
        Cannery(<span class='icon-flex-row'><img src='${Ls}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>75%</span><span class='ratio-count'>2</span></span></span>)
        Iron(<span class='icon-flex-row'><img src='${c}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        CarePackage(<img src='${ia}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane(<span class='icon-flex-row'><img src='${a}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sugar(<span class='icon-flex-row'><img src='${o}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Chocolate(<span class='icon-flex-row'><img src='${ss}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Cocoa(<img src='${Y}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cattle(<img src='${q}' class='icon-size' /><span class='ratio-count'>2</span>)
        Potato(<span class='icon-flex-row'><img src='${f}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Schnapps(<span class='icon-flex-row'><img src='${F}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Cattle & RedPeppers --> ArtisnalKitchen --> Cannery --> CarePackage
        Iron --> Cannery
        SugarCane --> Sugar --> Chocolate --> CarePackage
        Cocoa --> Chocolate
        Potato --> Schnapps --> CarePackage
        `}]},{colBreak:!0,tierName:"skip"},{colBreak:!1,tierName:"Hacienda",productionChains:[{productionChain:"hotSauce",chainMultiplier:"2",mermaidDefinition:s`
        flowchart LR
        Spices(<span class='icon-flex-row icon-regional-container'><img src='${b}' class='icon-regional' /><img src='${W}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        HotSauce(<img src='${ba}' class='icon-size' /><span class='ratio-count'>1</span>)
        Spices --> HotSauce
        `},{productionChain:"atole",chainMultiplier:"2",mermaidDefinition:s`
        flowchart LR
        Corn(<img src='${v}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane(<span class='icon-flex-row'><img src='${a}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Atole(<img src='${Qs}' class='icon-size' /><span class='ratio-count'>1</span>)
        Corn & SugarCane --> Atole
        `},{productionChain:"haciendaRum",chainMultiplier:"2",mermaidDefinition:s`
        flowchart LR
        SugarCane(<img src='${a}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wood(<span class='icon-flex-row'><img src='${c}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Rum(<img src='${x}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane & Wood --> Rum
        `},{productionChain:"haciendaSchnapps",chainMultiplier:"2",mermaidDefinition:s`
        flowchart LR
        Potato(<span class='icon-flex-row icon-regional-container'><img src='${b}' class='icon-regional' /><img src='${f}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Schnapps(<span class='icon-regional-container'><img src='${b}' class='icon-regional' /><img src='${F}' class='icon-size' /><span class='ratio-count'>1</span></span>)
        Potato --> Schnapps
        `},{productionChain:"haciendaBeer",mermaidDefinition:s`
        flowchart LR
        Grain(<span class='icon-regional-container'><img src='${b}' class='icon-regional' /><img src='${t}' class='icon-size' /><span class='ratio-count'>1</span></span>)
        Corn(<img src='${v}' class='icon-size' /><span class='ratio-count'>1</span>)
        Beer(<span class='icon-regional-container'><img src='${b}' class='icon-regional' /><img src='${vs}' class='icon-size' /><span class='ratio-count'>1</span></span>)
        Grain & Corn --> Beer
        `}]},{colBreak:!0,tierName:"skip"},{colBreak:!1,tierName:"Empire of the Skies",productionChains:[{productionChain:"aluminium",chainMultiplier:"9",mermaidDefinition:s`
        flowchart LR
        Bauxite(<span class='icon-flex-row'><img src='${Xs}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>11%</span><span class='ratio-count'>1</span></span></span>)
        Charcoal(<span class='icon-flex-row'><img src='${Ts}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33%</span><span class='ratio-count'>1</span></span></span>)
        Aluminium(<img src='${Zs}' class='icon-size' /><span class='ratio-count'>1</span>)
        Bauxite & Charcoal --> Aluminium
      `},{productionChain:"helium",mermaidDefinition:s`
        flowchart LR
        Clay(<img src='${rs}' class='icon-size' /><span class='ratio-count'>2</span>)
        FishOil(<img src='${fs}' class='icon-size' /><span class='ratio-count'>2</span>)
        IndustrialLubricant(<img src='${_a}' class='icon-size' /><span class='ratio-count'>2</span>)
        Saltpeter(<img src='${h}' class='icon-size' /><span class='ratio-count'>8</span>)
        Helium(<img src='${Sa}' class='icon-size' /><span class='ratio-count'>1</span>)
        Clay --> Helium
        FishOil & Saltpeter --> IndustrialLubricant --> Helium
      `}]}];const an={class:"column masonry-container"},nn=w("div",{class:"flex-break hidden item"},null,-1),cn=w("div",{class:"flex-break item"},null,-1),on=w("div",{class:"flex-break item"},null,-1),en=w("div",{class:"flex-break item"},null,-1),ln=w("div",{class:"flex-break item"},null,-1),pn={key:0},hn=Vs({__name:"AnnoExpansions",setup(rn){Ms();const xs=Is({icon:ga,text:"All chains from Season 3 through Season 4 (Empire of the Skies)."});return(tn,fn)=>(C(),V(Ps,null,{default:P(()=>[w("div",an,[nn,cn,on,en,ln,I(us,{title:"Information",class:"masonry-col item","col-break":!1},{default:P(()=>[I(Rs,{"item-data":A(Gs),"item-world-data":A(Fs)},{default:P(()=>[I(Ws,As(Ns(xs.value)),null,16)]),_:1},8,["item-data","item-world-data"])]),_:1}),(C(!0),N(ds,null,gs(A(sn),z=>(C(),V(us,{key:z.tierName,title:z.tierName,"col-break":z.colBreak,class:"masonry-col item"},{default:P(()=>[z.colBreak?Hs("",!0):(C(),N("div",pn,[(C(!0),N(ds,null,gs(z.productionChains,D=>(C(),V(Es,{key:D.productionChain,"production-chain":D.productionChain,"chain-multiplier":D.chainMultiplier,"mermaid-definition":D.mermaidDefinition},null,8,["production-chain","chain-multiplier","mermaid-definition"]))),128))]))]),_:2},1032,["title","col-break"]))),128))])]),_:1}))}});export{hn as default};
