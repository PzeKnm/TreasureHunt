﻿using System;
using System.Collections.Generic;
using System.Text;

namespace PinAdapter
{
    class PinAlreadyExportedException : Exception
    {
        public PinAlreadyExportedException()
            : base()
        { }

        public PinAlreadyExportedException(string message)
            : base(message)
        { }
    }
}
