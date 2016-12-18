const lookup = [0x01, 0x00, 0x04, 0x08, 0x01, 0x10, 0x01, 0x20, 0x02, 0x00, 0x05, 0x08, 0x02, 0x10, 0x02, 0x20, 0x03,
                0x00, 0x06, 0x08, 0x03, 0x10, 0x03, 0x20, 0x04, 0x00, 0x07, 0x08, 0x04, 0x10, 0x04, 0x20, 0x05, 0x00,
                0x08, 0x08, 0x05, 0x10, 0x05, 0x20, 0x06, 0x00, 0x09, 0x08, 0x06, 0x10, 0x06, 0x20, 0x07, 0x00, 0x0a,
                0x08, 0x07, 0x10, 0x07, 0x20, 0x08, 0x00, 0x0b, 0x08, 0x08, 0x10, 0x08, 0x20, 0x09, 0x00, 0x04, 0x09,
                0x09, 0x10, 0x09, 0x20, 0x0a, 0x00, 0x05, 0x09, 0x0a, 0x10, 0x0a, 0x20, 0x0b, 0x00, 0x06, 0x09, 0x0b,
                0x10, 0x0b, 0x20, 0x0c, 0x00, 0x07, 0x09, 0x0c, 0x10, 0x0c, 0x20, 0x0d, 0x00, 0x08, 0x09, 0x0d, 0x10,
                0x0d, 0x20, 0x0e, 0x00, 0x09, 0x09, 0x0e, 0x10, 0x0e, 0x20, 0x0f, 0x00, 0x0a, 0x09, 0x0f, 0x10, 0x0f,
                0x20, 0x10, 0x00, 0x0b, 0x09, 0x10, 0x10, 0x10, 0x20, 0x11, 0x00, 0x04, 0x0a, 0x11, 0x10, 0x11, 0x20,
                0x12, 0x00, 0x05, 0x0a, 0x12, 0x10, 0x12, 0x20, 0x13, 0x00, 0x06, 0x0a, 0x13, 0x10, 0x13, 0x20, 0x14,
                0x00, 0x07, 0x0a, 0x14, 0x10, 0x14, 0x20, 0x15, 0x00, 0x08, 0x0a, 0x15, 0x10, 0x15, 0x20, 0x16, 0x00,
                0x09, 0x0a, 0x16, 0x10, 0x16, 0x20, 0x17, 0x00, 0x0a, 0x0a, 0x17, 0x10, 0x17, 0x20, 0x18, 0x00, 0x0b,
                0x0a, 0x18, 0x10, 0x18, 0x20, 0x19, 0x00, 0x04, 0x0b, 0x19, 0x10, 0x19, 0x20, 0x1a, 0x00, 0x05, 0x0b,
                0x1a, 0x10, 0x1a, 0x20, 0x1b, 0x00, 0x06, 0x0b, 0x1b, 0x10, 0x1b, 0x20, 0x1c, 0x00, 0x07, 0x0b, 0x1c,
                0x10, 0x1c, 0x20, 0x1d, 0x00, 0x08, 0x0b, 0x1d, 0x10, 0x1d, 0x20, 0x1e, 0x00, 0x09, 0x0b, 0x1e, 0x10,
                0x1e, 0x20, 0x1f, 0x00, 0x0a, 0x0b, 0x1f, 0x10, 0x1f, 0x20, 0x20, 0x00, 0x0b, 0x0b, 0x20, 0x10, 0x20,
                0x20, 0x21, 0x00, 0x04, 0x0c, 0x21, 0x10, 0x21, 0x20, 0x22, 0x00, 0x05, 0x0c, 0x22, 0x10, 0x22, 0x20,
                0x23, 0x00, 0x06, 0x0c, 0x23, 0x10, 0x23, 0x20, 0x24, 0x00, 0x07, 0x0c, 0x24, 0x10, 0x24, 0x20, 0x25,
                0x00, 0x08, 0x0c, 0x25, 0x10, 0x25, 0x20, 0x26, 0x00, 0x09, 0x0c, 0x26, 0x10, 0x26, 0x20, 0x27, 0x00,
                0x0a, 0x0c, 0x27, 0x10, 0x27, 0x20, 0x28, 0x00, 0x0b, 0x0c, 0x28, 0x10, 0x28, 0x20, 0x29, 0x00, 0x04,
                0x0d, 0x29, 0x10, 0x29, 0x20, 0x2a, 0x00, 0x05, 0x0d, 0x2a, 0x10, 0x2a, 0x20, 0x2b, 0x00, 0x06, 0x0d,
                0x2b, 0x10, 0x2b, 0x20, 0x2c, 0x00, 0x07, 0x0d, 0x2c, 0x10, 0x2c, 0x20, 0x2d, 0x00, 0x08, 0x0d, 0x2d,
                0x10, 0x2d, 0x20, 0x2e, 0x00, 0x09, 0x0d, 0x2e, 0x10, 0x2e, 0x20, 0x2f, 0x00, 0x0a, 0x0d, 0x2f, 0x10,
                0x2f, 0x20, 0x30, 0x00, 0x0b, 0x0d, 0x30, 0x10, 0x30, 0x20, 0x31, 0x00, 0x04, 0x0e, 0x31, 0x10, 0x31,
                0x20, 0x32, 0x00, 0x05, 0x0e, 0x32, 0x10, 0x32, 0x20, 0x33, 0x00, 0x06, 0x0e, 0x33, 0x10, 0x33, 0x20,
                0x34, 0x00, 0x07, 0x0e, 0x34, 0x10, 0x34, 0x20, 0x35, 0x00, 0x08, 0x0e, 0x35, 0x10, 0x35, 0x20, 0x36,
                0x00, 0x09, 0x0e, 0x36, 0x10, 0x36, 0x20, 0x37, 0x00, 0x0a, 0x0e, 0x37, 0x10, 0x37, 0x20, 0x38, 0x00,
                0x0b, 0x0e, 0x38, 0x10, 0x38, 0x20, 0x39, 0x00, 0x04, 0x0f, 0x39, 0x10, 0x39, 0x20, 0x3a, 0x00, 0x05,
                0x0f, 0x3a, 0x10, 0x3a, 0x20, 0x3b, 0x00, 0x06, 0x0f, 0x3b, 0x10, 0x3b, 0x20, 0x3c, 0x00, 0x07, 0x0f,
                0x3c, 0x10, 0x3c, 0x20, 0x01, 0x08, 0x08, 0x0f, 0x3d, 0x10, 0x3d, 0x20, 0x01, 0x10, 0x09, 0x0f, 0x3e,
                0x10, 0x3e, 0x20, 0x01, 0x18, 0x0a, 0x0f, 0x3f, 0x10, 0x3f, 0x20, 0x01, 0x20, 0x0b, 0x0f, 0x40, 0x10,
                0x40, 0x20];

module.exports = {
    decompress: (buffer) => {
        let i = 0;

        // parse size
        let size = 0;
        let bits = 0;
        while (1) {
            let n = buffer[i];
            if (bits + 7 < 32) {
                size = size | ((n & 0x7f) << bits);
                bits += 7;
                i++;
                if ((n & 0x80) === 0) break;
            }
            else {
                size = size | (n << bits);
                bits += 4;
                i++;
                break;
            }
        }

        // parse content
        let decompressed = new Uint8Array(size);
        let ptr = 0;
        while (1) {
            if (i > buffer.byteLength) break;
            let b = buffer[i];
            i++;
            let low = b & 3;
            if (low > 0) {
                // dict
                let lookupVal = lookup[b << 1] | (lookup[(b << 1) + 1] << 8)
                let len = lookupVal >> 11
                let lzOffset = 0;
                let shift = 0;
                while (len > 0) {
                    lzOffset = lzOffset | (buffer[i] << shift);
                    i++;
                    shift += 8;
                    len--;
                }
                lzOffset = lzOffset + (lookupVal & 0x0700);
                let lzLength = lookupVal & 0xff;
                for (let j = 0; j < lzLength; j++) {
                    decompressed[ptr] = decompressed[ptr - lzOffset];
                    ptr++;
                }
            }
            else {
                // literal
                b = b >> 2;
                if (b >= 60) {
                    // long literal
                    let len = b - 59;
                    b = 0;
                    let shift = 0;
                    while (len > 0) {
                        b = b | (buffer[i] << shift);
                        i++;
                        shift += 8;
                        len--;
                    }
                }
                b++;
                let literal = buffer.slice(i, i + b);
                for (let j = 0; j < literal.length; j++) {
                    decompressed[ptr++] = literal[j];
                }
                i += b;
            }
        }
        return decompressed;
    }
}
