function dedent(code: string): string {
  const lines: string[] = code.trimStart().split("\n");
  let minIndent: number = Number.MAX_SAFE_INTEGER;

  for (const line of lines) {
    if (!line.trim()) continue;
    const match = line.match(/^(\s+)/);
    if (match) {
      const indentSize = match[1].length;
      if (indentSize < minIndent) {
        minIndent = indentSize;
      }
    } else {
      minIndent = 0;
    }
  }

  if (minIndent === Number.MAX_SAFE_INTEGER) {
    minIndent = 0;
  }

  return lines
    .map(line => (line.startsWith(" ".repeat(minIndent)) ? line.slice(minIndent) : line))
    .join("\n");
}

export const originalCode: string = dedent(`
@Override
public void keyPressed(KeyEvent e) {
    switch (e.getKeyCode()) {
        case 39: {
            if (ThreadsController.directionSnake == 2) break;
            ThreadsController.directionSnake = 1;
            break;
        }
        case 38: {
            if (ThreadsController.directionSnake == 4) break;
            ThreadsController.directionSnake = 3;
            break;
        }
        case 37: {
            if (ThreadsController.directionSnake == 1) break;
            ThreadsController.directionSnake = 2;
            break;
        }
        case 40: {
            if (ThreadsController.directionSnake == 3) break;
            ThreadsController.directionSnake = 4;
            break;
        }
    }
}`);

export const obfuscatedCode: String = dedent(`
@Override
public void keyPressed(KeyEvent keyEvent) {
    block47: {
        int n;
        int n2;
        int n3;
        int n4;
        
        block49: {
            int n5;
            int n6;
            block50: {
                block48: {
                    int n7;
                    block51: {
                        int n8;
                        block52: {
                            block46: {
                                int n9;
                                block53: {
                                    int n10;
                                    int n11;
                                    block54: {
                                        int n12;
                                        block55: {
                                            int n13;
                                            block56: {
                                                block43: {
                                                    int n14;
                                                    block57: {
                                                        int n15;
                                                        block58: {
                                                            int n16;
                                                            block59: {
                                                                int n17;
                                                                block60: {
                                                                    block44: {
                                                                        int n18;
                                                                        block61: {
                                                                            int n19;
                                                                            block62: {
                                                                                block63: {
                                                                                    block64: {
                                                                                        block65: {
                                                                                            block66: {
                                                                                                block67: {
                                                                                                    int n20;
                                                                                                    block45: {
                                                                                                        void VLoVsUkG;
                                                                                                        int n21;
                                                                                                        n4 = 1959931499;
                                                                                                        n3 = -736786307 - n4;
                                                                                                        n2 = (0xD6462299 ^ n4) + n3;
                                                                                                        n20 = 860322428 + n4 - n3 ^ n2;
                                                                                                        n6 = 1481095397 + n4 + n3 - n2;
                                                                                                        n11 = (-1937172751 - n4 ^ n3) - n2;
                                                                                                        n = n21 = VLoVsUkG.getKeyCode();
                                                                                                        int n22 = (0xA1A5CD1A ^ n4) + n3 ^ n2;
                                                                                                        int n23 = n20;
                                                                                                        int n24 = (0xB84B426E ^ n4) - n3 + n2;
                                                                                                        if (n24 + n23 == n24 + n22) break block49;
                                                                                                        int n25 = (0xA5373684 ^ n4) + n3 + n2;
                                                                                                        int n26 = 650008913 + n4 + n3 - n2;
                                                                                                        if (n20 + n26 == n25 + n26) break block50;
                                                                                                        int n27 = (0xBA413F36 ^ n4) - n3 - n2;
                                                                                                        int n28 = n6;
                                                                                                        int n29 = (1105082894 + n4 ^ n3) + n2;
                                                                                                        if (n29 + n28 == n29 + n27) break block51;
                                                                                                        int n30 = (0x752B5893 ^ n4) + n3 ^ n2;
                                                                                                        int n31 = n20;
                                                                                                        int n32 = -1910247662 + n4 - n3 - n2;
                                                                                                        if (n32 + n31 == n32 + n30) break block51;
                                                                                                        int n33 = 1289035927 + n4 + n3 ^ n2;
                                                                                                        int n34 = n20;
                                                                                                        int n35 = (1836650544 - n4 ^ n3) - n2;
                                                                                                        if (n35 + n34 == n35 + n33) break block51;
                                                                                                        int n36 = 1070597187 + n4 ^ n3 ^ n2;
                                                                                                        if (n20 + n36 == (-52045189 + n4 - n3 ^ n2) + n36) break block51;
                                                                                                        int n37 = 651187602 - n4 - n3 + n2;
                                                                                                        int n38 = n6;
                                                                                                        int n39 = -467788045 - n4 - n3 - n2;
                                                                                                        if (n39 + n38 == n39 + n37) break block51;
                                                                                                        int n40 = (0x6EBB6825 ^ n4 ^ n3) - n2;
                                                                                                        int n41 = (0xE05C1199 ^ n4) - n3 - n2;
                                                                                                        if (n20 + n41 == n40 + n41) break block51;
                                                                                                        int n42 = (-1437818489 - n4 ^ n3) - n2;
                                                                                                        int n43 = (0x9CFB3E4B ^ n4) - n3 - n2;
                                                                                                        if (null != null) {
                                                                                                            throw new EnumConstantNotPresentException();
                                                                                                        }
                                                                                                        if (n11 + n43 == n42 + n43) break block51;
                                                                                                        int n44 = 1078893020 + n4 - n3 - n2;
                                                                                                        int n45 = (0xEF4668A3 ^ n4) + n3 ^ n2;
                                                                                                        if (n20 + n45 == n44 + n45) break block52;
                                                                                                        int n46 = 670417816 + n4 - n3 ^ n2;
                                                                                                        int n47 = n20;
                                                                                                        int n48 = (-1805568387 - n4 ^ n3) + n2;
                                                                                                        if (n48 + n47 == n48 + n46) break block52;
                                                                                                        int n49 = (0x7DA499C ^ n4 ^ n3) + n2;
                                                                                                        if (n6 + n49 == (0xDF046DF3 ^ n4) + n3 - n2 + n49) break block52;
                                                                                                        int n50 = (-258759456 - n4 ^ n3) + n2;
                                                                                                        int n51 = (0x75FFB275 ^ n4 ^ n3) - n2;
                                                                                                        if (n20 + n51 == n50 + n51) break block52;
                                                                                                        int n52 = (0xEA371164 ^ n4) + n3 + n2;
                                                                                                        int n53 = n;
                                                                                                        int n54 = (0xD09C446 ^ n4) - n3 + n2;
                                                                                                        if (n54 + n53 == n54 + n52) break block43;
                                                                                                        n8 = n21;
                                                                                                        int n55 = (-767439173 - n4 ^ n3) - n2;
                                                                                                        int n56 = (0xDB5AFE9D ^ n4) - n3 + n2;
                                                                                                        if (n20 + n56 == n55 + n56) break block52;
                                                                                                        int n57 = -217072654 + n4 - n3 - n2;
                                                                                                        int n58 = n20;
                                                                                                        int n59 = -1361253593 + n4 + n3 - n2;
                                                                                                        if (n59 + n58 == n59 + n57) break block53;
                                                                                                        int n60 = (0x4774798C ^ n4 ^ n3) - n2;
                                                                                                        int n61 = n6;
                                                                                                        int n62 = 671964931 + n4 - n3 + n2;
                                                                                                        if (n62 + n61 == n62 + n60) break block52;
                                                                                                        int n63 = 54696203 + n4 - n3 ^ n2;
                                                                                                        int n64 = 697583489 - n4 ^ n3 ^ n2;
                                                                                                        if (n20 + n64 == n63 + n64) break block53;
                                                                                                        int n65 = (-309997255 + n4 ^ n3) + n2;
                                                                                                        int n66 = n20;
                                                                                                        int n67 = 1186302604 + n4 + n3 + n2;
                                                                                                        if (n67 + n66 == n67 + n65) break block54;
                                                                                                        int n68 = -170595400 + n4 + n3 - n2;
                                                                                                        if (n20 + n68 == 1911662939 - n4 + n3 + n2 + n68) break block54;
                                                                                                        int n69 = -1440356776 + n4 ^ n3 ^ n2;
                                                                                                        int n70 = n6;
                                                                                                        int n71 = (0x50C73971 ^ n4) + n3 + n2;
                                                                                                        if (n71 + n70 == n71 + n69) break block53;
                                                                                                        int n72 = 1081595922 + n4 - n3 ^ n2;
                                                                                                        int n73 = (0xB8ADF276 ^ n4 ^ n3) + n2;
                                                                                                        if (n20 + n73 == n72 + n73) break block55;
                                                                                                        int n74 = 508726587 + n4 - n3 - n2;
                                                                                                        int n75 = 1555492613 + n4 ^ n3 ^ n2;
                                                                                                        if (n11 + n75 == n74 + n75) break block52;
                                                                                                        int n76 = 584319635 - n4 - n3 - n2;
                                                                                                        int n77 = -1776955170 + n4 ^ n3 ^ n2;
                                                                                                        if (n20 + n77 == n76 + n77) break block55;
                                                                                                        int n78 = -1313794551 - n4 ^ n3 ^ n2;
                                                                                                        int n79 = -334094273 - n4 + n3 ^ n2;
                                                                                                        if (n20 + n79 == n78 + n79) break block55;
                                                                                                        int n80 = -1235096889 + n4 ^ n3 ^ n2;
                                                                                                        int n81 = n6;
                                                                                                        int n82 = (0x5F52092E ^ n4 ^ n3) - n2;
                                                                                                        if (n82 + n81 == n82 + n80) break block54;
                                                                                                        int n83 = 474681342 + n4 - n3 + n2;
                                                                                                        if (n20 + n83 == 1090686479 - n4 + n3 + n2 + n83) break block55;
                                                                                                        int n84 = (0x15C8EF57 ^ n4) - n3 - n2;
                                                                                                        int n85 = (0x71CADCE6 ^ n4 ^ n3) - n2;
                                                                                                        if (null != null) {
                                                                                                            throw new NumberFormatException(cisIhFPP[0]);
                                                                                                        }
                                                                                                        if (n8 + n85 == n84 + n85) break block44;
                                                                                                        n13 = n21;
                                                                                                        int n86 = (0x830427EC ^ n4) + n3 - n2;
                                                                                                        int n87 = (0x715B387D ^ n4) - n3 + n2;
                                                                                                        if (n20 + n87 == n86 + n87) break block56;
                                                                                                        int n88 = 0x3EAFF44C ^ n4 ^ n3 ^ n2;
                                                                                                        if (n20 + n88 == -666269988 - n4 - n3 + n2 + n88) break block56;
                                                                                                        int n89 = (0xE1DA668C ^ n4) - n3 - n2;
                                                                                                        int n90 = n6;
                                                                                                        int n91 = 585441530 - n4 + n3 + n2;
                                                                                                        if (n91 + n90 == n91 + n89) break block55;
                                                                                                        int n92 = (0x5015B2E2 ^ n4) - n3 + n2;
                                                                                                        if (n20 + n92 == 1638717817 - n4 + n3 + n2 + n92) break block56;
                                                                                                        int n93 = 1111959729 + n4 - n3 ^ n2;
                                                                                                        int n94 = n20;
                                                                                                        int n95 = (0xDEEA6812 ^ n4) - n3 ^ n2;
                                                                                                        if (n95 + n94 == n95 + n93) break block56;
                                                                                                        int n96 = 1612470558 + n4 + n3 + n2;
                                                                                                        int n97 = n20;
                                                                                                        int n98 = 522386929 - n4 - n3 - n2;
                                                                                                        if (n98 + n97 == n98 + n96) break block57;
                                                                                                        int n99 = (-598196413 - n4 ^ n3) - n2;
                                                                                                        int n100 = n6;
                                                                                                        int n101 = (0x6DC2113B ^ n4 ^ n3) - n2;
                                                                                                        if (n101 + n100 == n101 + n99) break block55;
                                                                                                        int n102 = (0xAA70FCF5 ^ n4) - n3 - n2;
                                                                                                        int n103 = n20;
                                                                                                        int n104 = (409264222 + n4 ^ n3) - n2;
                                                                                                        if (n104 + n103 == n104 + n102) break block57;
                                                                                                        int n105 = (0xDC5947C0 ^ n4) + n3 - n2;
                                                                                                        int n106 = 1455684783 - n4 + n3 ^ n2;
                                                                                                        if (n11 + n106 == n105 + n106) break block55;
                                                                                                        int n107 = -1665956289 + n4 + n3 - n2;
                                                                                                        int n108 = (0x24E633F7 ^ n4) - n3 - n2;
                                                                                                        if (n20 + n108 == n107 + n108) break block58;
                                                                                                        int n109 = -1119090242 + n4 - n3 + n2;
                                                                                                        if (n20 + n109 == 3563745 - n4 - n3 - n2 + n109) break block58;
                                                                                                        int n110 = 633625610 + n4 ^ n3 ^ n2;
                                                                                                        if (n6 + n110 == -2136427848 + n4 + n3 - n2 + n110) break block56;
                                                                                                        int n111 = -1644350758 - n4 ^ n3 ^ n2;
                                                                                                        int n112 = n20;
                                                                                                        int n113 = (0xAFF684C2 ^ n4) - n3 + n2;
                                                                                                        if (n113 + n112 == n113 + n111) break block59;
                                                                                                        int n114 = (-1371659029 + n4 ^ n3) - n2;
                                                                                                        if (n13 + n114 == (748262598 + n4 ^ n3) + n2 + n114) break block45;
                                                                                                        n16 = n21;
                                                                                                        int n115 = (0x1E80D24C ^ n4) + n3 ^ n2;
                                                                                                        if (n20 + n115 == (-1509826004 + n4 ^ n3) - n2 + n115) break block59;
                                                                                                        int n116 = 1359664680 - n4 + n3 - n2;
                                                                                                        int n117 = n20;
                                                                                                        int n118 = 1126086001 - n4 - n3 ^ n2;
                                                                                                        if (n118 + n117 == n118 + n116) break block59;
                                                                                                        int n119 = (-583028192 - n4 ^ n3) - n2;
                                                                                                        int n120 = 658724732 + n4 ^ n3 ^ n2;
                                                                                                        if (n6 + n120 == n119 + n120) break block56;
                                                                                                        int n121 = (0x5AB2048C ^ n4 ^ n3) - n2;
                                                                                                        int n122 = n20;
                                                                                                        int n123 = (-1387908751 - n4 ^ n3) - n2;
                                                                                                        if (n123 + n122 == n123 + n121) break block59;
                                                                                                        int n124 = (0xB8C71F18 ^ n4) - n3 - n2;
                                                                                                        int n125 = (0x9F10C401 ^ n4) - n3 + n2;
                                                                                                        if (n20 + n125 == n124 + n125) break block60;
                                                                                                        int n126 = 982254723 + n4 - n3 + n2;
                                                                                                        int n127 = n20;
                                                                                                        int n128 = (0xAEB155B5 ^ n4) - n3 + n2;
                                                                                                        if (n128 + n127 == n128 + n126) break block60;
                                                                                                        int n129 = (-1202857630 + n4 ^ n3) - n2;
                                                                                                        int n130 = -1270066119 - n4 + n3 - n2;
                                                                                                        if (n6 + n130 == n129 + n130) break block57;
                                                                                                        int n131 = (0x691E26A0 ^ n4 ^ n3) - n2;
                                                                                                        int n132 = -325002492 + n4 - n3 - n2;
                                                                                                        if (n20 + n132 == n131 + n132) break block60;
                                                                                                        int n133 = (0x1EF9A2ED ^ n4 ^ n3) - n2;
                                                                                                        int n134 = -135093741 - n4 ^ n3 ^ n2;
                                                                                                        if (n11 + n134 == n133 + n134) break block56;
                                                                                                        int n135 = (-1191422286 - n4 ^ n3) + n2;
                                                                                                        int n136 = n20;
                                                                                                        int n137 = -1809608945 + n4 - n3 - n2;
                                                                                                        if (n137 + n136 == n137 + n135) break block60;
                                                                                                        int n138 = (0xAD20388B ^ n4) + n3 - n2;
                                                                                                        int n139 = 257993501 - n4 + n3 - n2;
                                                                                                        if (n20 + n139 == n138 + n139) break block61;
                                                                                                        int n140 = 1085101631 - n4 - n3 - n2;
                                                                                                        int n141 = n6;
                                                                                                        int n142 = (0x23A7C812 ^ n4) + n3 - n2;
                                                                                                        if (n142 + n141 == n142 + n140) break block58;
                                                                                                        int n143 = (-2013077069 - n4 ^ n3) + n2;
                                                                                                        if (n20 + n143 == 1124485206 + n4 + n3 - n2 + n143) break block61;
                                                                                                        int n144 = 392575877 - n4 + n3 ^ n2;
                                                                                                        int n145 = n16;
                                                                                                        int n146 = -867826354 + n4 ^ n3 ^ n2;
                                                                                                        if (n146 + n145 == n146 + n144) break block46;
                                                                                                        n19 = n11;
                                                                                                        int n147 = (0xA71D6CEF ^ n4) + n3 + n2;
                                                                                                        int n148 = n20;
                                                                                                        int n149 = -817703824 - n4 + n3 - n2;
                                                                                                        if (n149 + n148 == n149 + n147) break block62;
                                                                                                        int n150 = (-1141761122 + n4 ^ n3) + n2;
                                                                                                        int n151 = (0x9C8BABC1 ^ n4) - n3 ^ n2;
                                                                                                        if (n20 + n151 == n150 + n151) break block62;
                                                                                                        int n152 = (-319045987 + n4 ^ n3) + n2;
                                                                                                        if (n6 + n152 == (-9391418 + n4 ^ n3 ^ n2) + n152) break block59;
                                                                                                        int n153 = 476953901 + n4 - n3 ^ n2;
                                                                                                        int n154 = n20;
                                                                                                        int n155 = 1007793293 + n4 - n3 + n2;
                                                                                                        if (n155 + n154 == n155 + n153) break block63;
                                                                                                        int n156 = 1962826544 - n4 + n3 + n2;
                                                                                                        if (n19 + n156 == (-1642480298 + n4 ^ n3) + n2 + n156) break block47;
                                                                                                        n19 = n11;
                                                                                                        int n157 = 185267394 + n4 - n3 + n2;
                                                                                                        int n158 = -1422300354 + n4 ^ n3 ^ n2;
                                                                                                        if (n20 + n158 == n157 + n158) break block63;
                                                                                                        int n159 = (1645904345 - n4 ^ n3) + n2;
                                                                                                        if (n20 + n159 == -1536954973 + n4 + n3 - n2 + n159) break block64;
                                                                                                        int n160 = (0x1DDFCC74 ^ n4 ^ n3) - n2;
                                                                                                        int n161 = n6;
                                                                                                        int n162 = -813950158 - n4 - n3 - n2;
                                                                                                        if (n162 + n161 == n162 + n160) break block59;
                                                                                                        int n163 = 1153831621 - n4 + n3 + n2;
                                                                                                        int n164 = (0xFDD30F5E ^ n4 ^ n3) + n2;
                                                                                                        if (n20 + n164 != n163 + n164) {
                                                                                                            int n165 = (0xCB0BDF4 ^ n4) - n3 ^ n2;
                                                                                                            if (n19 + n165 != ((0x9BC60BAA ^ n4) + n3 ^ n2) + n165) break block47;
                                                                                                        }
                                                                                                        break block64;
                                                                                                    }
                                                                                                    n19 = hUfdRNee.SmiNqPtR;
                                                                                                    int n166 = -1509227897 + n4 + n3 ^ n2;
                                                                                                    int n167 = (0x66DF64AD ^ n4) + n3 - n2;
                                                                                                    if (n20 + n167 == n166 + n167) break block64;
                                                                                                    int n168 = 1005897720 + n4 + n3 - n2;
                                                                                                    int n169 = (-1910908239 - n4 ^ n3) + n2;
                                                                                                    if (n20 + n169 == n168 + n169) break block65;
                                                                                                    int n170 = 252882528 - n4 - n3 - n2;
                                                                                                    if (n6 + n170 == ((0x17AEB6F6 ^ n4) - n3 ^ n2) + n170) break block60;
                                                                                                    int n171 = (1394785290 - n4 ^ n3) + n2;
                                                                                                    if (n20 + n171 == (-1713037750 - n4 ^ n3) + n2 + n171) break block65;
                                                                                                    int n172 = 1236307642 + n4 - n3 - n2;
                                                                                                    int n173 = n20;
                                                                                                    int n174 = -1715803707 - n4 + n3 - n2;
                                                                                                    if (n174 + n173 == n174 + n172) break block66;
                                                                                                    int n175 = 1316770365 + n4 + n3 ^ n2;
                                                                                                    int n176 = (-1227581081 - n4 ^ n3) - n2;
                                                                                                    if (n20 + n176 == n175 + n176) break block67;
                                                                                                    int n177 = 1357168684 - n4 - n3 ^ n2;
                                                                                                    int n178 = n6;
                                                                                                    int n179 = (0x54C7CAF5 ^ n4) + n3 ^ n2;
                                                                                                    if ((0x2A4613C0 ^ n4 ^ n3 ^ n2) * (767680153 + n4 + n3 ^ n2) != (748277225 + n4 ^ n3) + n2) {
                                                                                                        throw new ReflectiveOperationException();
                                                                                                    }
                                                                                                    if (n179 + n178 == n179 + n177) break block60;
                                                                                                    int n180 = 992207022 + n4 + n3 + n2;
                                                                                                    int n181 = (0x42B0B85B ^ n4) - n3 + n2;
                                                                                                    if (n11 + n181 == n180 + n181) break block59;
                                                                                                }
                                                                                                int n182 = (0xD736597F ^ n4) + n3 - n2;
                                                                                                if (n6 + n182 == (0x6D425FA5 ^ n4) + n3 - n2 + n182) break block61;
                                                                                            }
                                                                                            int n183 = 2013699920 + n4 - n3 - n2;
                                                                                            if (n19 + n183 == (-705892477 - n4 - n3 ^ n2) + n183) break block47;
                                                                                            n19 = (0x29B9DD64 ^ n4) - n3 + n2;
                                                                                        }
                                                                                        int n184 = 343535363 + n4 - n3 ^ n2;
                                                                                        int n185 = -700655675 + n4 - n3 + n2;
                                                                                        if (n6 + n185 == n184 + n185) break block62;
                                                                                    }
                                                                                    int n186 = 1930909485 - n4 + n3 - n2;
                                                                                    int n187 = n11;
                                                                                    int n188 = 361571496 - n4 + n3 - n2;
                                                                                    if (n188 + n187 == n188 + n186) break block60;
                                                                                }
                                                                                hUfdRNee.SmiNqPtR = n19;
                                                                                n19 = n11;
                                                                            }
                                                                            int n189 = 1822521755 + n4 + n3 - n2;
                                                                            int n190 = n19;
                                                                            int n191 = 832561466 + n4 + n3 - n2;
                                                                            if (n191 + n190 == n191 + n189) break block47;
                                                                            n18 = n11;
                                                                        }
                                                                        int n192 = 1794339731 + n4 + n3 ^ n2;
                                                                        int n193 = -705335794 + n4 + n3 ^ n2;
                                                                        if (n18 + n193 != n192 + n193) break block47;
                                                                    }
                                                                    n17 = hUfdRNee.SmiNqPtR;
                                                                }
                                                                int n194 = (373158269 - n4 ^ n3) + n2;
                                                                int n195 = (-845780537 + n4 ^ n3) + n2;
                                                                if (n17 + n195 == n194 + n195) break block47;
                                                                n16 = -767680132 - n4 - n3 + n2;
                                                            }
                                                            hUfdRNee.SmiNqPtR = n16;
                                                            n15 = n11;
                                                        }
                                                        int n196 = (-213196501 - n4 ^ n3) + n2;
                                                        int n197 = n15;
                                                        int n198 = 1871913405 - n4 ^ n3 ^ n2;
                                                        if (n198 + n197 == n198 + n196) break block47;
                                                        n14 = n11;
                                                    }
                                                    int n199 = 0x9555CAB ^ n4 ^ n3 ^ n2;
                                                    int n200 = n14;
                                                    int n201 = (-2136805482 - n4 ^ n3) + n2;
                                                    if (n201 + n200 != n201 + n199) break block47;
                                                }
                                                n13 = hUfdRNee.SmiNqPtR;
                                            }
                                            int n202 = -1952753842 + n4 + n3 ^ n2;
                                            if (n13 + n202 == (-373158228 + n4 ^ n3) - n2 + n202) break block47;
                                            n12 = (0x29B9DD7B ^ n4) - n3 + n2;
                                        }
                                        hUfdRNee.SmiNqPtR = n12;
                                        n10 = n11;
                                    }
                                    int n203 = (0x81EDD ^ n4 ^ n3) - n2;
                                    int n204 = n10;
                                    int n205 = (0x56AC956A ^ n4 ^ n3) + n2;
                                    if (n205 + n204 == n205 + n203) break block48;
                                    n9 = n11;
                                }
                                int n206 = 42209355 + n4 ^ n3 ^ n2;
                                void var105_109 = n9;
                                int n207 = (0x9330D3C3 ^ n4) - n3 ^ n2;
                                if (n207 + var105_109 != n207 + n206) break block47;
                            }
                            n8 = hUfdRNee.SmiNqPtR;
                        }
                        int n208 = 392575840 - n4 + n3 - n2;
                        int n209 = (0x48E27F59 ^ n4) - n3 + n2;
                        if (n8 + n209 == n208 + n209) break block47;
                        n7 = (748262567 + n4 ^ n3) + n2;
                    }
                    hUfdRNee.SmiNqPtR = n7;
                }
                n5 = n6;
            }
            int n210 = -1391308663 + n4 - n3 - n2;
            if (n5 + n210 == (-1754395471 - n4 ^ n3 ^ n2) + n210) break block47;
            n = n6;
        }
        int n211 = 1750627835 + n4 - n3 - n2;
        int n212 = n;
        int n213 = -1041289308 - n4 - n3 - n2;
        if (n213 + n212 == n213 + n211) {
            // empty if block
        }
    }
}`)

