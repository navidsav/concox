using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AGTCommandClient.BMIEncryption
{
    public struct IP_t
    {
        public byte ip_msb;
        public byte ip_2;
        public byte ip_3;
        public byte ip_lsb;
    };

    public enum Firewall_Ret_t
    {
        NO_ERR,

        ERR_DECR_ROT,
        ERR_DECR_PAKET_LEN,
        ERR_DECR_PAKET_INDEX,
        ERR_DECR_IP,
        ERR_DECR_CRC,
        ERR_DECR_HEADER,
        ERR_DECR_FOOTER,
        DECR_DONE,

        ERR_ENCR_ROT,
        ERR_ENCR_PAKET_LEN,
        ERR_ENCR_PAKET_INDEX,
        ERR_ENCR_IP,
        ENCR_DONE,
    };
}
